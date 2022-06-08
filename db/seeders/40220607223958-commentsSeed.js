'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      { user_id: "3", body: "this is a rad article", article_id: "1", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "3", body: "very informative! cool!", article_id: "1", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "i was playing super mario today", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "my mom says video games will make me stupid...", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "ocarina of time is the best game of all time", article_id: "3", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "can someone paypal me some money so i can buy a Nintendo Switch?", article_id: "3", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
