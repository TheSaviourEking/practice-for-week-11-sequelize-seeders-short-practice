'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Colors', [
      {
        name: 'Pink', createdAt: '2024-03-06 00:35:39',
        updatedAt: '2024-03-06 00:36:39'
      }, {
        name: 'Purple', createdAt: '2024-03-06 00:35:39', updatedAt: new Date().toISOString()
      }, {
        name: 'Margenta', createdAt: '2024-03-06 00:35:39', updatedAt: '2024-03-06 00:36:39'
      }, {
        name: 'Piege', createdAt: '2024-03-06 00:35:39', updatedAt: '2024-03-09 00:36:39'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', { name: ['Purple', 'Pink', 'Piege', 'Margenta'] }, {})
  }
};
