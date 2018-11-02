
var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list called Recipe
var Service = new keystone.List('Service', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-createdAt',
});


// Finally we are gonna add the fields for our Service
Service.add({
  name: {
    type: String,
    required: true
  },
  description: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  }
});

Service.track = true;

// Setting the default order of the columns on the admin tab
Service.defaultColumns = 'name';
Service.register();
