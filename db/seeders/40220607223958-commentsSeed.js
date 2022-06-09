'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      { user_id: "5", body: "Mission accomplished. It's killer =)", article_id: "1", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "4", body: "Super beastly.", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "3", body: "This is simple work m8", article_id: "3", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "I'd love to see a video of how it works.", article_id: "4", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "It's admirable not just alluring!", article_id: "5", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "4", body: "These are classic and graceful m8", article_id: "6", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "3", body: "Let me take a nap... great type, anyway.", article_id: "7", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "Charcoal. Mmh wondering if this comment will hit the generateor as well...", article_id: "8", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "Nice use of contrast in this spaces, friend.", article_id: "9", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "5", body: "This icons blew my mind.", article_id: "10", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "Graceful work you have here.", article_id: "7", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "5", body: "This shot has navigated right into my heart.", article_id: "3", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "Immensely thought out! Trying it now.", article_id: "4", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "3", body: "Admirable colour palette, friend.", article_id: "9", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "4", body: "Such classic.", article_id: "1", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "5", body: "I think I'm crying. It's that radiant.", article_id: "2", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "4", body: "Leading the way mate.", article_id: "5", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "3", body: "can someone paypal me some money so i can buy a Nintendo Switch?", article_id: "10", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "2", body: "I admire your shot :)", article_id: "6", createdAt: new Date(), updatedAt: new Date() },
      { user_id: "1", body: "this is a rad article", article_id: "8", createdAt: new Date(), updatedAt: new Date() },
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
