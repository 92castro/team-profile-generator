const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

const intern1 = new Intern("Carl", "3rff", "dsg@gmail.com", "denver");
console.log(intern1);
