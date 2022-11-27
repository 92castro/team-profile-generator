const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("Should return manager role (name,id,email,office number)", () => {
    const manager = new Manager(
      "Carl",
      1920,
      "carltd@gmail.com",
      "555-555-4525"
    );
    expect(manager.getOfficeNumber()).toEqual("555-555-4525");
  });
});
