const connection = require("./connection");

connection.studentsequelize
  .drop()
  .then(() => {
    console.log("Student table deleted sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });
