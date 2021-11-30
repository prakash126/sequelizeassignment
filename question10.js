const connection = require("./connection");
const Sequalize = require("sequelize");

connection.sequelize
  .query("select COUNT(*) from `EmployeeTable`", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAndCountAll()
  .then((data) => {
    console.log(data.count);
  })
  .catch((err) => {
    console.log(err);
  });
