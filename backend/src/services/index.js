const authors = require('./authors/authors.service.js');
const publications = require('./publications/publications.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(authors);
  app.configure(publications);
};
