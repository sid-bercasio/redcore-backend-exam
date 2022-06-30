'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('category', [
      {
        name: 'Web',
      },
      {
        name: 'Mobile',
      },
      {
        name: 'IT',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('category', {}, null)
  }
};
