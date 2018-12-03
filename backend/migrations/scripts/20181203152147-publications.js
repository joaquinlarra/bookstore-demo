'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    
    return queryInterface.createTable('publications', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        field: 'author_id'
      },
      publishDate: {
        type: Sequelize.DATE,
        field: 'publish_date'
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
    return queryInterface.dropTable('publications');
  }
};
