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

let moviesequelize = sequelize.define(
  "MovieSequelize",
  {
    MovieId: {
      primaryKey: true,
      type: Sequelize.STRING,
    },
    MovieName: Sequelize.STRING,
    Type_of_Movie: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = {
  sequelize: sequelize,
  studentsequelize: studentsequelize,
  Sequelize: Sequelize,
  employeesequelize: employeesequelize,
  moviesequelize: moviesequelize,
};
