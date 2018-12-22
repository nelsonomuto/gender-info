const { Network } = require('synaptic');
const { convertNameToInput } = require('./util');
const genderNeuralNetworkJSON = require('./neural-network/jsonGenderNeuralNetwork.json');

module.exports = function getGenderInfo(name) {
  const genderNeuralNetwork = Network.fromJSON(genderNeuralNetworkJSON);
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
