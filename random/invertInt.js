/**
 * This function receives a integer and inverts it´s digits
 * - It´s not about the sign, it´s about the digits
 * @param {number} number - The number to invert
 * @returns {number} - The inverted number
 * @example
 * invert(1234) // returns 4321
 *
 */
const invertInt = (number) => {
    var invert = 0;
    // start the loop with 0 on invert
    while (number != 0) {
        invert = invert * 10;
        invert = invert + (number % 10);
        // get the last digit using modulo 10 and add it to invert
        // so it´s used on the next loop
        number = Math.trunc(number / 10);
        // remove the last digit using Math.trunc and
        // save the result on number for the next loop
    }
    return invert;
};

export default invertInt;
