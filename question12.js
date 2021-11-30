const connection = require("./connection");
const Sequalize = require("sequelize");

const Op = Sequalize.Op;

connection.sequelize
  .query("select * from `EmployeeTable` where name LIKE 'p%'", {
    type: Sequalize.QueryTypes.SELECT,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.employeesequelize
  .findAll({ where: { name: { [Op.like]: "%p" } }, raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
