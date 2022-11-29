const choose = require("../choose");

test("if its not an array, throw an error", () => {
    expect(() => choose()).toThrow();
    expect(() => choose(1, 2, 3, 4, 5)).toThrow();
});

test("if its an empty array, throw an error", () => {
    expect(() => choose([])).toThrow();
});

test("if there is only one option, return it", () => {
    expect(choose([1])).toEqual(1);
    expect(choose([""])).toEqual("");
    expect(choose([{ a: 1 }])).toEqual({ a: 1 });
});

test("choose a random element from an array", () => {
    expect([1, 2, 3, 4, 5]).toContain(choose([1, 2, 3, 4, 5]));
    expect([1, "2", 3, "4", 5]).toContain(choose([1, "2", 3, "4", 5]));
    expect(["1", "2", "3", "4", "5"]).toContain(choose(["1", "2", "3", "4", "5"]));
    expect([{ one: 1 }, { two: 2 }, { tree: 3 }]).toContainEqual(
        choose([{ one: 1 }, { two: 2 }, { tree: 3 }]),
    );
});
