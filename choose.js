//This function receives an array of options and return one of then

const choose = (array) => {
    if (!Array.isArray(array)) {
        throw `The function "choose" needs an array. received ${array}`;
    } else if (array.length === 0) {
        throw "function choose cant work with empty array";
    } else if (array.length === 1) {
        return array[0];
    } else {
        return array[Math.floor(Math.random() * array.length)];
    }
};
module.exports = choose;
