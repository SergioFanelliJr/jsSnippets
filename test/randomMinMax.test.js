// import randomMinMax from "./randomMinMax";
const randomMinMax = require("../randomMinMax");

test("dont return indefined", () => {
    expect(randomMinMax(1, 10)).toBeDefined();
    expect(randomMinMax(10, 1)).toBeDefined();
    expect(randomMinMax(-1, 2)).toBeDefined();
    expect(randomMinMax(-1, 0)).toBeDefined();
    expect(randomMinMax(-2, -1)).toBeDefined();
    expect(randomMinMax(0, 0)).toBeDefined();
    expect(randomMinMax(0, -1)).toBeDefined();
    expect(randomMinMax(0, 10)).toBeDefined();
    expect(randomMinMax(9876543210, 9976543210)).toBeDefined();
});

test("returns N < max", () => {
    expect(randomMinMax(1, 10)).toBeLessThanOrEqual(10);
    expect(randomMinMax(-1, 2)).toBeLessThanOrEqual(2);
    expect(randomMinMax(-1, 0)).toBeLessThanOrEqual(0);
    expect(randomMinMax(10, 1)).toBeLessThanOrEqual(10);
    expect(randomMinMax(-2, -1)).toBeLessThanOrEqual(-1);
    expect(randomMinMax(0, 0)).toBeLessThanOrEqual(0);
    expect(randomMinMax(0, -1)).toBeLessThanOrEqual(0);
    expect(randomMinMax(0, 10)).toBeLessThanOrEqual(10);
    expect(randomMinMax(9876543210, 9976543210)).toBeLessThanOrEqual(9976543210);
});

test("returns N > min", () => {
    expect(randomMinMax(1, 10)).toBeGreaterThanOrEqual(1);
    expect(randomMinMax(-1, 2)).toBeGreaterThanOrEqual(-1);
    expect(randomMinMax(-1, 0)).toBeGreaterThanOrEqual(-1);
    expect(randomMinMax(10, 1)).toBeGreaterThanOrEqual(1);
    expect(randomMinMax(-2, -1)).toBeGreaterThanOrEqual(-2);
    expect(randomMinMax(0, 0)).toBeGreaterThanOrEqual(0);
    expect(randomMinMax(0, -1)).toBeGreaterThanOrEqual(-1);
    expect(randomMinMax(0, 10)).toBeGreaterThanOrEqual(0);
    expect(randomMinMax(9876543210, 9976543210)).toBeGreaterThanOrEqual(9876543210);
});

test("throw an error if min/max !== Number", () => {
    expect(() => {
        randomMinMax();
    }).toThrow();
});
