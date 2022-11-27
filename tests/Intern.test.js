const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("Should return intern role (name,id,email,school)", () => {
    const intern = new Intern(
      "Billy",
      1940,
      "billytd@gmail.com",
      "Denver University"
    );
    expect(intern.getSchool()).toEqual("Denver University");
  });
});
