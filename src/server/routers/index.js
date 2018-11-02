const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const serverRender = require('../loaders/serverRender');

const routes = {
  api: importRoutes('./api'),
};

// Export our app routes
exports = module.exports = function(app) {
  // Get access to the API route in our app
  app.get('/api/services/', keystone.middleware.api, routes.api.service.list);

  app.get('*', serverRender);
};
