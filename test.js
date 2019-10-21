const getGenderInfo = require('./index')
const [ name ] = process.argv.slice(2)

console.log(getGenderInfo(name))