export const getName = name => name
export const getSurName = surname => surname
export default (name, surname) => `${getName(name)} ${getSurName(surname)}`
