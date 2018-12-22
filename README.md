# Gender-info
Determine the gender of a name using javascript api.

Artificial intelligence via synaptic library.

<img width="832" alt="gender-info-test" src="https://user-images.githubusercontent.com/1546207/50370160-b7858380-056f-11e9-95ed-ee5a47093c83.png">

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
