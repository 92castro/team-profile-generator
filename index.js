const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

function start() {
  managerPrompt();
}

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the managers ID number?",
        name: "idNumber",
      },
      {
        type: "input",
        message: "What is the managers e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the managers office-number?",
        name: "officeNumber",
      },
    ])

    .then((data) => {
      const employee = new Manager(
        data.managerName,
        data.idNumber,
        data.email,
        data.role,
        data.officeNumber
      );
      const name = employee.getName();
      const role = employee.getRole();
      const email = employee.getEmail();
      const idNumber = employee.getId();

      employeePrompt();

      const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./source/style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header class="container-fluid bg-secondary text-center">
      <h1>Team Profile</h1>
    </header>
    <main class="d-flex flex-row justify-content-evenly">
      <div class="card" style="width: 18rem">
        <div class="card-header bg-success text-center">${name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-info">${role}</li>
          <li class="list-group-item bg-info">ID: ${idNumber}</li>
          <li class="list-group-item bg-info">E-mail: <a href="mailto:@gmail.com">${email}</a></li>
          <li class="list-group-item bg-info">Office Number: ${data.officeNumber}</li>
        </ul>
      </div>`;
      employees.push(html);
    });
}

function employeePrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your role?",
        choices: ["Engineer", "Intern", "Finish building team"],
        name: "role",
      },
    ])
    .then((data) => {
      if (data.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is engineer's name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is engineer's ID number?",
              name: "idNumber",
            },
            {
              type: "input",
              message: "What is engineer's email?",
              name: "email",
            },
            {
              type: "input",
              message: "What is engineer's Github?",
              name: "github",
            },
          ])
          .then((data) => {
            const employee = new Engineer(
              data.name,
              data.idNumber,
              data.email,
              data.role,
              data.github
            );
            const name = employee.getName();
            const role = employee.getRole();
            const email = employee.getEmail();
            const idNumber = employee.getId();
            const html = `      <div class="card" style="width: 18rem">
        <div class="card-header bg-success text-center">${name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-info">${role}</li>
          <li class="list-group-item bg-info">ID: ${idNumber}</li>
          <li class="list-group-item bg-info">E-mail: <a href="mailto:@gmail.com">${email}</a></li>
          <li class="list-group-item bg-info">Github: <a href="https://github.com/92castro" target="_blank">${data.github}</a></li>
        </ul>
      </div>`;
            employees.push(html);
            employeePrompt();
          });
      } else if (data.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is intern's name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is intern's ID number?",
              name: "idNumber",
            },
            {
              type: "input",
              message: "What is intern's email?",
              name: "email",
            },
            {
              type: "input",
              message: "What school did intern attend?",
              name: "school",
            },
          ])
          .then((data) => {
            const employee = new Intern(
              data.name,
              data.idNumber,
              data.email,
              data.role,
              data.school
            );
            const name = employee.getName();
            const role = employee.getRole();
            const email = employee.getEmail();
            const idNumber = employee.getId();
            const html = `      <div class="card" style="width: 18rem">
        <div class="card-header bg-success text-center">${name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-info">${role}</li>
          <li class="list-group-item bg-info">ID: ${idNumber}</li>
          <li class="list-group-item bg-info">E-mail: <a href="mailto:@gmail.com">${email}</a></li>
          <li class="list-group-item bg-info">School: ${data.school}</li>
        </ul>
      </div>`;
            employees.push(html);
            employeePrompt();
          });
      } else {
        employees.push(closingHTML);
        employees.join();

        fs.writeFile("page.html", employees.join(), (err) => {
          console.log("Success");
          err
            ? console.error(err)
            : console.log("File created under new html file");
        });
      }
    });
}

start();

const closingHTML = `    </main>
  </body>
</html>`;
