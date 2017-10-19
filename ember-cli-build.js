'use strict';

const path = require('path');
const glimmerRedux = require('rollup-plugin-glimmer-redux');
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let reselect = path.dirname(require.resolve('reselect/es/index.js'));
  let app = new GlimmerApp(defaults, {
    trees: { reselect },
    babel: {
      plugins: [
        'transform-object-rest-spread',
      ]
    },
    rollup: {
      plugins: [
        glimmerRedux()
      ]
    }
  });

  return app.toTree();
};
