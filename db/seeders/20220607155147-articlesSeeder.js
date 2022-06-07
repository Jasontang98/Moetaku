'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Articles', [{
     title: 'This is an article',
     body: 'The GameStop in the Gateway Mall in Lincoln, Nebraska is one of the busiest around, at least according to the person who used to run it. But over the weekend it was closed after four employees decided to walk out and never return over what he says are bad working conditions and a verbally abusive district manager. It’s the second time this year a GameStop in the area saw its entire staff resign in protest.',
    user_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Articles', null, {});
  }
};
