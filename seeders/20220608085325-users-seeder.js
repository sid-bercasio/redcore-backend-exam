'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.org',
        password: '$2a$10$EhnLKb0f4tayFJh9ErpWFenxhBpz1jhCtEaBKn9tID.lKdajYalWu'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', {}, null)
  }
};
