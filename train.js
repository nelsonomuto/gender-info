const synaptic = require('synaptic');
const _ = require('lodash');
const females = require('./training-data/names/female.json');
const males = require('./training-data/names/male.json');
const { INPUT_LENGTH, convertNameToInput } = require('./util');
const { Trainer , Architect } = synaptic;

const myNetwork = new Architect.Perceptron(INPUT_LENGTH, 6, 2);

let trainingData = [];
let trainer = new Trainer(myNetwork);

for(let i = 0; i < females.length; i++) {
  trainingData.push({
    input: convertNameToInput(females[i]),
    output: [0, 1] // Male = false, Female = true
  });
}
for(let i = 0; i < males.length; i++) {
  for(let j = 0; j < 2; j++) {
    trainingData.push({
      input: convertNameToInput(males[i]),
      output: [1, 0] // Male = true, Female = false
    });
  }
}

for (let i=0; i<10 ;i++) {
  trainingData = _.shuffle(trainingData);
}

for(let i = 0 ; i < 25 ; i++) {
  trainer.train(trainingData, {
    rate: 0.01,
    iterations: 200,
    shuffle: true,
    cost: synaptic.Trainer.cost.MSE
  });
  var error = trainer.test(trainingData)['error'];
  console.log(
    'Iteration ' + ((i+1) * 200) + ' --> Error: ' + error
  );
}

function getGender(name) {
  var result = myNetwork.activate(convertNameToInput(name));
  console.log(name);
  if(result[0] > result[1]) {
    console.log(`--- Male (${(result[0]*100).toFixed()}% sure)`);
    return true;
  }

  console.log(`--- Female (${(result[1]*100).toFixed()}% sure)`);
  return false;
}

function test() {
  getGender('Nelson Omuto');
  getGender('Nelson');
  getGender('Omuto');
  getGender('Emma');
  getGender('Jaxon');
  getGender('Bailey');
  getGender('Sule');
  getGender('Stone');
  getGender('Sule Stone');
  getGender('Dwayne Johnson');
  getGender('Katt Williams');
}

test();

const jsonGenderNeuralNetwork = JSON.stringify(myNetwork.toJSON());
const fs = require('fs');

fs.writeFileSync('./neural-network/jsonGenderNeuralNetwork.json', jsonGenderNeuralNetwork);