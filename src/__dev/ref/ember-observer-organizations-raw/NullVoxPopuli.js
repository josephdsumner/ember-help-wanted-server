const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'NullVoxPopuli',
  repositoryNames: [
    'ember-array-map-resource',
    'ember-autostash-modifier',
    'ember-data-resources',
    'ember-deep-tracked',
    'ember-function-component',
    'ember-functions-as-helper-polyfill',
    'ember-jsqr',
    'ember-lifecycle-component',
    'ember-lifecycle-utils',
    'ember-popperjs',
    'ember-query-params-service',
    'ember-repl',
    'ember-resources',
    'ember-statechart-component',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
