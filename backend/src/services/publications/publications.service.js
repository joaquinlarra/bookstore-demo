// Initializes the `publications` service on path `/publications`
const createService = require('feathers-sequelize');
const createModel = require('../../models/publications.model');
const hooks = require('./publications.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/publications', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('publications');

  service.hooks(hooks);
};
