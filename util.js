const INPUT_LENGTH = 7; // number of characters in name used to derive input for algorithm

const GENDER_NEURAL_NETWORK_KEY = 'jsonGenderNeuralNetwork';

function convertNameToInput(name) {
  name = name.toLowerCase();
  if(name.length > INPUT_LENGTH)
  {name = name.substring(INPUT_LENGTH);}
  while(name.length < INPUT_LENGTH)
  {name = ' ' + name;}
  let  characters = name.split('');
  return characters.map(
    (c) => c == ' ' ? 0 : c.charCodeAt(0)/1000
  );
}

module.exports = { INPUT_LENGTH, convertNameToInput, GENDER_NEURAL_NETWORK_KEY };