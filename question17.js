const connection = require("./connection");

connection.employeesequelize
  .bulkCreate([
    { EmpId: 104, name: "Suraj", dept: "CSE", designation: "student" },
    { EmpId: 105, name: "Nitin", dept: "IT", designation: "accountant" },
    { EmpId: 106, name: "Rajan", dept: "Electronics", designation: "Engineer" },
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
