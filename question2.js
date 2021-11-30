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

let studentsequelize = sequelize.define(
  "StudentSequelize",
  {
    student_id: Sequelize.STRING,
    name: Sequelize.STRING,
    stream: Sequelize.STRING,
    marks: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// sequelize.query('create table `User` (student_id int,name constchar(25),stream constchar(25),marks int)',{type:Sequelize.QueryTypes.RAW})

studentsequelize
  .sync({ force: true })
  .then((data) => {
    console.log("Table created sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });
