const reduceOnly = require("../../src/utils/reduceOnly");
describe("reduceOnly", () => {
  test("reduce only the non filtered fields", () => {
    const values = [0, 0, 4, 0, 5];
    const isZero = v => v === 0;
    const sum = (a, b) => a + b;
    const res = reduceOnly(isZero)(sum, 0, values);
    expect(res).toEqual(0);
  });
});
