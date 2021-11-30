const connection = require("./connection");

connection.employeesequelize
  .create({ EmpId: 101, name: "Prince", dept: "MECH", designation: "student" })
  .then((data) => {
    console.log("1 record Inserted");
  })
  .catch((err) => {
    console.log(err);
  });
