var connection = require("./connection");
var Sequalize = require("sequelize");

connection.sequelize
  .query("select * from `EmployeeTable` where name='Prakash'", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAll({ where: { name: "Gyan" }, raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
