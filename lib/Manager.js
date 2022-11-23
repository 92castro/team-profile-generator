const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email, "Manager");
    this.officenumber = officenumber;
  }

  getOfficeNumber() {
    return this.officenumber;
  }
}

module.exports = Manager;

const manager1 = new Manager("Carl", "3rff", "dsg@gmail.com", "156466145");
console.log(manager1);
