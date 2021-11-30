const Sequelize = require("sequelize");
const db = require("./db.config");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
  pool: {
    min: db.pool.min,
    max: db.pool.max,
    acquire: db.pool.acquire,
    idle: db.pool.idle,
  },
});

let employeesequelize = sequelize.define(
  "EmployeeTable",
  {
    EmpId: {
      primaryKey: true,
      type: Sequelize.STRING,
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING,
  },
  {
    freezeTableName: true,
  }
);

// employeesequelize
//   .sync()
//   .then((data) => {
//     console.log("Table Created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// employeesequelize.bulkCreate([
//   { EmpId: 2, name: "Gyan", dept: "FullStack", designation: "trainee" },
//   { EmpId: 3, name: "Prakash", dept: "FullStack", designation: "trainee" },
//   { EmpId: 1, name: "Raja", dept: "FullStack", designation: "trainee" },
// ]);

employeesequelize
  .findAll({ raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
