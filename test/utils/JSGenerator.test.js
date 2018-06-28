const JSGenerator = require("../../src/utils/JSGenerator");
const {
  brackets,
  braces,
  objField,
  obj,
  toField
} = require("../../src/utils/JSGenerator");

describe("JSGenerator", () => {
  test("wrap brackets", () => {
    expect(braces("foo")).toEqual("{foo}");
  });
  test("objField", () => {
    expect(objField({ key: "foo", value: "String" })).toEqual('"foo": String');
  });
  test("toField", () => {
    expect(toField("foo", 42)).toEqual({ key: "foo", value: 42 });
  });
  test("obj", () => {
    expect(obj([toField("foo", 42), toField("bar", "String")])).toEqual(
      '{"foo": 42, "bar": String}'
    );
  });
});
