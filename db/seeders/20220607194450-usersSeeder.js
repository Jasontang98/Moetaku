'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {firstName: "Demo", lastName: "User", username: "demo", hashedPassword: bcrypt.hashSync("demo", 10), email: "demo@email.com", createdAt: new Date(), updatedAt: new Date()},
        {firstName: "Eddie", lastName: "Lau", username: "Labbit", hashedPassword: bcrypt.hashSync("labbit", 10), email: "labbit@email.com", createdAt: new Date(), updatedAt: new Date()},
        {firstName: "Jason", lastName: "Tang", username: "Lil Rice Farm", hashedPassword: bcrypt.hashSync("lilricefarm", 10), email: "jasontang16@gmail.com", createdAt: new Date(), updatedAt: new Date()},
        {firstName: "Ethan", lastName: "Browning", username: "ethan", hashedPassword: bcrypt.hashSync("ethan", 10), email: "ethan@email.com", createdAt: new Date(), updatedAt: new Date()},
        {firstName: "Moe", lastName: "Hussein", username: "gomoe", hashedPassword: bcrypt.hashSync("gomoe", 10), email: "moe@email.com", createdAt: new Date(), updatedAt: new Date()},
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
