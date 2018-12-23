
<!-- [![Build Status](https://travis-ci.org/nelsonomuto/@nelsonomuto/gender-info.svg?branch=master)](https://travis-ci.org/nelsonomuto/@nelsonomuto/gender-info) -->

<!-- [![Dependencies status](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info.svg?style=flat)](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info) [![devDependency Status](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info/dev-status.svg?style=flat&breakCache=0)](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info#info=devDependencies) -->
<span class="badge-npmversion"><a href="https://npmjs.org/package/@nelsonomuto/gender-info" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@nelsonomuto/gender-info.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@nelsonomuto/gender-info" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@nelsonomuto/gender-info.svg" alt="NPM downloads" /></a></span>

<!-- [![Coverage Status](https://coveralls.io/repos/github/nelsonomuto/@nelsonomuto/gender-info/badge.svg?branch=master)](https://coveralls.io/github/nelsonomuto/@nelsonomuto/gender-info?branch=master) -->

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
