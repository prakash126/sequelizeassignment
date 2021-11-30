const Sequelize = require("sequelize");
const db = require("./db.config");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  dialect: db.dialect,
  host: db.HOST,
  pool: {
    max: db.pool.max,
    min: db.pool.min,
    acquire: db.pool.acquire,
    idle: db.pool.idle,
  },
});

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

// moviesequelize
//   .sync()
//   .then((data) => {
//     console.log("Database created sucessfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// moviesequelize.bulkCreate([
//   { MovieId: 1, MovieName: "Movie1", Type_of_Movie: "Motivational" },
//   { MovieId: 3, MovieName: "Movie2", Type_of_Movie: "Comedy" },
//   { MovieId: 4, MovieName: "Movie3", Type_of_Movie: "Action" },
// ]);

// getting unhandledpromise error here
moviesequelize
  .findAll({ raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// sequelize
//   .query("select * from `MovieSequelize`", {
//     type: Sequelize.QueryTypes.SELECT,
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
