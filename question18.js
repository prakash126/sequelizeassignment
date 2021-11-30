const connection = require("./connection");

connection.employeesequelize
  .update(
    { name: "Prabhu Singh" },
    {
      where: { name: "Prakash" },
    }
  )
  .then((data) => {
    console.log("Record Updated Sucessfull");
  })
  .catch((err) => {
    console.log(err);
  });
