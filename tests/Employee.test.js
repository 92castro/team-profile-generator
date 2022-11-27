const Employee = require("../lib/Employee");

describe("Test Employee", () => {
  it("Should initiate name to all roles", () => {
    const employee = new Employee("Carla");
    expect(employee.getName()).toEqual("Carla");
  });
  it("Should initiate id to all roles", () => {
    const employee = new Employee("Carla", 1956);
    expect(employee.getId()).toEqual(1956);
  });
  it("Should initiate email to all roles", () => {
    const employee = new Employee("Carla", 1956, "carla@yahoo.com");
    expect(employee.getEmail()).toEqual("carla@yahoo.com");
  });
});
