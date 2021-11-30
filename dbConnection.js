const Sequelize = require("sequelize");
const dbConfig = require("./db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    min: dbConfig.min,
    max: dbConfig.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

//connect with db using authentication() of sequalize

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully..");
  })
  .catch((err) => {
    console.error("Unable to connect to db,beacuse" + err);
  })
  .finally(() => {
    sequelize.close();
  });
