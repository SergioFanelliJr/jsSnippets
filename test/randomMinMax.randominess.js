const randomMinMax = require("../randomMinMax");
const choose = require("../randomMinMax");

let map = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
};

for (let i = 0; i < 100000; i++) {
    map[`${randomMinMax(1, 6)}`] += 1;
}
console.log(map);
