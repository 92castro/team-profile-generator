const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("Should return engineer role (name,id,email,github)", () => {
    const engineer = new Engineer("Bob", 1930, "bobtd@gmail.com", "bob213");
    expect(engineer.getGitHub()).toEqual("bob213");
  });
});
