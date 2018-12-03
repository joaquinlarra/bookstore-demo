'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    
    return queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('authors');
    
  }
};
