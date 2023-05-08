/**
 *  Converts a number to a double digit string
 * @param number - number to convert
 * @returns {string} - double digit string in the format of '00'
 * @example  convertToDoubleDigit(1) // '01'
 * @example  convertToDoubleDigit(10) // '10'
 * @example  convertToDoubleDigit(100) // '100'
 */
export const convertToDoubleDigit = (number: number) => {
  return number < 10 ? `0${number}` : number
}
