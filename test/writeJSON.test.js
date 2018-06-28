const writeJSON = require("../src/utils/writeJSON");
const fs = require("fs");
jest.mock("fs");
describe("utils/writeJSON", () => {
  test.skip("should preserve type", () => {
    writeJSON("./", "file")({ type: String });
    expect(fs.writeFileSync).toHaveBeenCalledWith("");
  });
});
