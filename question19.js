const connection = require("./connection");

connection.employeesequelize
  .destroy({ where: { name: "Prabhu Singh" } })
  .then((data) => {
    console.log("Record deleted sucessfully" + data);
  })
  .catch((err) => {
    console.log(err);
  });
