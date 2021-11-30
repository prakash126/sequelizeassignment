const connection = require("./connection");

const emp = connection.employeesequelize.build({
  EmpId: 102,
  name: "Sumit",
  dept: "CIVIL",
  designation: "student",
});
emp
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
