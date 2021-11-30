var connection = require("./connection");
var Sequelize = require("sequelize");
connection.studentsequelize
  .bulkCreate([
    { student_id: 2, name: "prakash", stream: "CSE", marks: 100 },
    { student_id: 3, name: "gyan", stream: "ECE", marks: 100 },
    { student_id: 4, name: "Aryan", stream: "CSE", marks: 100 },
    { student_id: 5, name: "keshav", stream: "CSE", marks: 100 },
  ])
  .then((data) => {
    console.log("Data Inserted Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

//INSERT INTO `UserSequelize` (`id`,`student_id`,`name`,`stream`,`marks`,`createdAt`,`updatedAt`)
// VALUES (NULL,2,'prakash','CSE',100,'2021-11-30 15:38:14','2021-11-30 15:38:14'),
// (NULL,3,'gyan','ECE',100,'2021-11-30 15:38:14','2021-11-30 15:38:14'),
// (NULL,4,'Aryan','CSE',100,'2021-11-30 15:38:14','2021-11-30 15:38:14'),
// (NULL,5,'keshav','CSE',100,'2021-11-30 15:38:14','2021-11-30 15:38:14');
