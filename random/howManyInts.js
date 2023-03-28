/**
 *This function receives two numbers and returns the number of times the first number appears in the second number.
 * @example
 * howManyInts(1, 111) // 3
 * howManyInts(2, 123) // 1
 * @param { Number } int
 * @param { Number } number
 */
export const howManyInts = (int, number) => {
    let count = 0;
    while (number > 0) {
        if (number % 10 === int) {
            count++;
        }
        number = Math.floor(number / 10);
    }
};
