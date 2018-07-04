const mapOnly = require("../../src/utils/mapOnly");

describe("utils/mapOnly", () => {
  test("filter", () => {
    const item = {
      foo: 42,
      bar: 24
    };
    const filterFunc = val => val === 42;
    const toZero = () => 0;
    const res = mapOnly(filterFunc, toZero, item);
    expect(res).toEqual({ foo: 0, bar: 24 });
  });
});
