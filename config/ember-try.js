'use strict';

module.exports = function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-3.1',
        npm: {
          devDependencies: {
            'ember-source': '~3.1.0',
          },
        },
      },
      {
        name: 'ember-3.2',
        npm: {
          devDependencies: {
            'ember-source': '~3.2.0',
          },
        },
      },
      {
        name: 'ember-3.3',
        npm: {
          devDependencies: {
            'ember-source': '~3.3.0',
          },
        },
      },
      {
        name: 'ember-3.4',
        npm: {
          devDependencies: {
            'ember-source': '~3.4.0',
          },
        },
      },
    ],
  };
};
