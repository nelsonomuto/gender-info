import CachemanMongoWrapper from '@server/shared/cacheman-mongo-wrapper';
const { Network } = require('synaptic');
const { convertNameToInput } = require('@ai/gender-info/util');
const { GENDER_NEURAL_NETWORK_KEY } = require('@ai/gender-info/util');

const _cache = new CachemanMongoWrapper({ collection: 'ai'});

function getGenderInfo({ name, genderNeuralNetwork }) {
  const result = genderNeuralNetwork.activate(convertNameToInput(name));
  if(result[0] > result[1]) {
    return {
      name,
      male: true,
      female: false,
      certainty: (result[0]*100).toFixed() + '%'
    };
  }

  return {
    name,
    male: false,
    female: true,
    certainty: (result[1]*100).toFixed() + '%'
  };
}

export default function genderInfoApi(app) {
  app.get('/ui-kohezion-api/ai/gender/name/:personName', async function (req, res) {
    const { personName } = req.params;
    const json = await _cache.get(GENDER_NEURAL_NETWORK_KEY);
    const genderNeuralNetwork = Network.fromJSON(json.value);
    res.header({
      'Content-Type': 'application/json'
    });
    res.json(getGenderInfo({ name: personName, genderNeuralNetwork}));
  });
}