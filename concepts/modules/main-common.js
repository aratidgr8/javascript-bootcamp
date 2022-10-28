//Create same with commonJS module

const { getFullName, getName, getSurName } = require('/.common.js');

console.log(getName('Arati'), getSurName('Bhandare'), getFullName('Anand', 'Bhandare'))
