const connection = require("./connection");
const Sequalize = require("sequelize");

connection.sequelize
  .query("select * from `EmployeeTable` order by name", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAll({ order: ["name"], raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
