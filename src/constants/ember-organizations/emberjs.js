const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'emberjs',

  repositoryNames: [
    // '.github',
    'api.emberjs.com',
    'cfp-app',
    'core-notes',
    'data',
    'ember',
    'ember-2-legacy',
    'ember-classic-decorator',
    'ember-copy',
    'ember-data-fixture-adapter',
    'ember-debug',
    'ember-dev',
    'ember-edition-utils',
    'ember-gem',
    'ember-inflector',
    'ember-inspector',
    'ember-jquery',
    'ember-jquery-legacy',
    'ember-legacy-controllers',
    'ember-legacy-views',
    'ember-map-polyfill',
    'ember-map-with-default',
    'ember-mocha',
    'ember-mocha-builds',
    'ember-module-unification-blueprint',
    'ember-namespace',
    'ember-octanify',
    'ember-optional-features',
    'ember-ordered-set',
    'ember-qunit',
    'ember-rails',
    'ember-record-extension',
    'ember-render-modifiers',
    'ember-states',
    'ember-string',
    'ember-test-helpers',
    'ember-test-waiters',
    'ember.js',
    'emberjs-build',
    'emberjs.github.com',
    'eslint-plugin-ember-internal',
    'group-helper',
    'legacy-bind-attr',
    'list-view',
    'log-manager',
    'quickstart-code-sample',
    'rfc-tracking',
    'rfcs',
    'starter-kit',
    'testem-failure-only-reporter',
    'whiteboard',
  ],

  supportedLabels: ['good first issue', 'hacktoberfest', 'help wanted'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
