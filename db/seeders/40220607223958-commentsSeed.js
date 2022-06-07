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
      { user_id: "3", body: "this article is a load of shit", article_id: "1", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "this is a rad article", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "this article is a load of shit", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "this is a rad article", article_id: "3", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "this article is a load of crap", article_id: "3", createdAt: new Date(), updatedAt: new Date() }
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
