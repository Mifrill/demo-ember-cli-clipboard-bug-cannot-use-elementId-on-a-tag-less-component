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
      {
        name: 'ember-3.5',
        npm: {
          devDependencies: {
            'ember-source': '~3.5.0',
          },
        },
      },
      {
        name: 'ember-3.7',
        npm: {
          devDependencies: {
            'ember-source': '~3.7.0',
          },
        },
      },
      {
        name: 'ember-3.8',
        npm: {
          devDependencies: {
            'ember-source': '~3.8.0',
          },
        },
      },
      {
        name: 'ember-3.9',
        npm: {
          devDependencies: {
            'ember-source': '~3.9.0',
          },
        },
      },
      {
        name: 'ember-3.10',
        npm: {
          devDependencies: {
            'ember-source': '~3.10.0',
          },
        },
      },
      {
        name: 'ember-3.11',
        npm: {
          devDependencies: {
            'ember-source': '~3.11.0',
          },
        },
      },
      {
        name: 'ember-3.12',
        npm: {
          devDependencies: {
            'ember-source': '~3.12.0',
          },
        },
      },
    ],
  };
};
