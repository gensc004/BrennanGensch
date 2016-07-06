/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.get('/morrisCode', function(req, res) {
    app.set('appPath', 'client/angularattack2016-morriscode');
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
      .get(errors[404]);
    app.route('/')
      .get(function(req, res) {
        res.sendfile(app.get('appPath') + '/index.html');
      });
    res.sendfile('index.html', {root: 'client/angularattack2016-morriscode/' });
  });
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};

