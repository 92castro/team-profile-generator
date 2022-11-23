const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;

const engineer1 = new Engineer("Carl", "3rff", "dsg@gmail.com", "cast92");
console.log(engineer1);
