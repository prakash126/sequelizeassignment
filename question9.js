const connection = require("./connection");
const Sequalize = require("sequelize");

connection.sequelize
  .query("select * from `EmployeeTable` where dept='IT'", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAll({ where: { dept: "IT" }, raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
