# Gender-info
Determine the gender of a name using javascript api.

Artificial intelligence via synaptic library.


## Getting started
Install via `npm install @nelsonomuto/gender-info`

###Server side Example
```
const getGenderInfo =  require('@nelsonomuto/gender-info');

console.log(getGenderInfo('Ben Simmons'));
// { male: true, female: false, certainty: '76%'}

```

## Client side Example
TBD

# Local development
- Use yarn `yarn install`

## Train the algorithm
Run `yarn train`