const connection = require("./connection");

const Customer = connection.sequelize.define(
  "Customer",
  {
    Id: {
      type: connection.Sequelize.INTEGER,
      primaryKey: true,
    },
    name: connection.Sequelize.STRING,
    location: connection.Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const products = connection.sequelize.define(
  "Product",
  {
    product_number: {
      primaryKey: true,
      type: connection.Sequelize.INTEGER,
    },
    description: connection.Sequelize.STRING,
    cost: connection.Sequelize.INTEGER,
    customerId: {
      type: connection.Sequelize.INTEGER,
      references: {
        model: "Customer",
        key: "Id",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

//Customer.belongsTo(products, { as: "Customer" });
// Customer.sync()
//   .then(() => {
//     console.log("Customer table created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// products
//   .sync()
//   .then(() => {
//     console.log("Product table created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Customer.bulkCreate([
//   { Id: 1, name: "Customer1", location: "India" },
//   { Id: 2, name: "Customer2", location: "AUS" },
//   { Id: 3, name: "Customer3", location: "UK" },
//   { Id: 4, name: "Customer4", location: "USA" },
// ]);
// products.bulkCreate([
//   {
//     product_number: 1,
//     description: "Product1",
//     cose: 212,
//     customerId: 3,
//   },
//   {
//     product_number: 2,
//     description: "Product2",
//     cose: 2253,
//     customerId: 2,
//   },
//   {
//     product_number: 3,
//     description: "Product3",
//     cose: 42,
//     customerId: 2,
//   },
//   {
//     product_number: 4,
//     description: "Product4",
//     cose: 2142,
//     customerId: 1,
//   },
// ]);

connection.sequelize
  .query(
    "select c.name,p.description from `Product` p inner join `Customer` c on p.customerId=c.Id;",
    { type: connection.Sequelize.QueryTypes.SELECT }
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
