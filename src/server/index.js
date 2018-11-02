//import keystone
require('ignore-styles');
require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['es2015', 'react'] });
const keystone = require('keystone');
const ReactEngine = require('react-engine');

var engine = ReactEngine.server.create({
  routes: require('../app/routes.jsx').default,
  performanceCollector: function(stats) {
    console.info(stats);
  }
});

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Keystone CMS',
  // Paths to our application static files
  'static': [
    './public/css/',
    './public/js/',
    './public/img/',

  ],

  // React Engine
  'views': 'templates/views',
  'view engine': 'jsx',
  'custom engine': engine,
  'view': ReactEngine.expressView,
  // Keystone includes an updates framework,
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database,
  // transition data when your models change,
  // or run transformation scripts against your database.
  'auto update': true,
  'mongo': 'mongodb://admin:welc0me@ds141613.mlab.com:41613/legaltek',
  'auth': true,
  'user model': 'User',
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
  'trust proxy' : true,
});


keystone.set('admin path', "admin");

// Load your project's Models
keystone.import('./models');

keystone.set('routes', require('./routers/index'));


// Start Keystone
keystone.start();
