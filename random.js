//In Javascript, the built-in way to generate a random number is Math.random(),
//which returns a number between 0 and 0.9999999999999999 (1 will never be returned).
//This function build upon Math.random() to return a random number between min and max.

const randomMinMax = (min, max) => {
    return Math.random() * (max - min) + min;
};
