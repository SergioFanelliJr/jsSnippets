const choose = require("../choose");

const testArray = [1, 2, 3, 4, 5];
let map = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
};

for (let i = 0; i < 100000; i++) {
    map[`${choose(testArray)}`] += 1;
}
console.log(map);
