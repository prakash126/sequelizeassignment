const connection = require("./connection");
const Sequalize = require("sequelize");

connection.sequelize
  .query("select name,dept from `EmployeeTable` where name='Prakash'", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAll({ attributes: ["name", "dept"], raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
