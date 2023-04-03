'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
          {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            password: 'password123',
            role: 'admin',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        {
          firstName: 'Maria',
          lastName: 'Souza',
          email: 'maria.souza@gmail.com',
          password: 'senha456',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Pedro',
          lastName: 'Almeida',
          email: 'pedro.almeida@gmail.com',
          password: 'senha789',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
