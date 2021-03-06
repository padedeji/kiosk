/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    i18n: {
      defaultLocale: 'unset'
    },

    modulePrefix: 'kiosk',
    environment: environment,
    baseURL: '/',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    mapbox: {
      accessToken: 'pk.eyJ1Ijoibmlja3NhaGxlciIsImEiOiJjaW4zcWYxMGowYzJ5dmxtNGF5eHNuMmh5In0.bIkQOshLMbzgIgfWVd6Ixw'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
