const keystone = require('keystone');

const Service = keystone.list('Service');

// Creating the API end point
exports.list = function(req, res) {
  Service.model
    .find(function(err, items) {
      if (err) return res.apiError('database error', err);
      res.apiResponse({
        services: items,
      });
    })
    .limit(Number(req.query.limit));
};
