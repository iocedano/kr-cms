require('ignore-styles');
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['es2015', 'react'],
});

const keystone = require('keystone');
const configureStore = require('../../app/store').default;

module.exports = function universalLoader(request, response, next) {
  if (request.path.includes(keystone.get('admin path'))) {
    return next();
  }

  const view = new keystone.View(request, response);
  const store = configureStore({}); // Initial State

  view.render('index', {
    store: store.getState(),
    request: {
      url: request.url,
      query: request.query,
    },
  });
};
