
<!-- [![Build Status](https://travis-ci.org/nelsonomuto/@nelsonomuto/gender-info.svg?branch=master)](https://travis-ci.org/nelsonomuto/@nelsonomuto/gender-info) -->

<!-- [![Dependencies status](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info.svg?style=flat)](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info) [![devDependency Status](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info/dev-status.svg?style=flat&breakCache=0)](https://david-dm.org/nelsonomuto/@nelsonomuto/gender-info#info=devDependencies) -->
<span class="badge-npmversion"><a href="https://npmjs.org/package/@nelsonomuto/gender-info" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@nelsonomuto/gender-info.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@nelsonomuto/gender-info" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@nelsonomuto/gender-info.svg" alt="NPM downloads" /></a></span>

<!-- [![Coverage Status](https://coveralls.io/repos/github/nelsonomuto/@nelsonomuto/gender-info/badge.svg?branch=master)](https://coveralls.io/github/nelsonomuto/@nelsonomuto/gender-info?branch=master) -->

# Gender-info
Determine the gender of a name using javascript api.

Artificial intelligence via synaptic library.

![gender-info 2018-12-23 09_12_26](https://user-images.githubusercontent.com/1546207/50384473-0972fa00-0693-11e9-9875-64032441f8bf.gif)


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
