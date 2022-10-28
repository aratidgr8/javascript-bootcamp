const getName = name => name
const getSurName = surname => surname

module.exports.getName = getName
module.exports.getSurName = getSurName

module.exports.getFullName = (name, surname) => `${getName(name)} ${getSurName(surname)}`
