const app = require('../src/app');
const env = process.env.NODE_ENV || 'development';
const dialect = 'sqlite';

module.exports = {
  [env]: {
    dialect,
    url: app.get(dialect),
    migrationStorageTableName: '_migrations'
  }
};