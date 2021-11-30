var emoloyeeSequelize = require("./connection");
var Sequalize = require("sequelize");

// emoloyeeSequelize.employeesequelize
//   .findByPk(1, { raw: true })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

emoloyeeSequelize.sequelize
  .query("select * from `EmployeeTable` where EmpId=1200", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
