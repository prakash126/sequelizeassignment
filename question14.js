const connection = require("./connection");
const Sequalize = require("sequelize");

const Op = Sequalize.Op;

connection.sequelize
  .query(
    "select * from `StudentSequelize` AS `s` where s.name='prakash' and s.stream='CSE'",
    {
      type: Sequalize.QueryTypes.SELECT,
    }
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

connection.studentsequelize
  .findAll({
    where: { [Op.and]: [{ name: "prakash" }, { stream: "CSE" }] },
    raw: true,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
