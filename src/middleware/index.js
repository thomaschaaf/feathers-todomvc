'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');
const universalRedux = require('universal-redux');
const universalConfig = require('../../config/universal-redux.config');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;
  
  app.use(universalRedux.renderer(universalConfig));

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
