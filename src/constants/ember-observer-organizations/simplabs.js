const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'simplabs',
  repositoryNames: [
    'ember-error-route',
    'ember-hbs-minifier',
    'ember-hotspots',
    'ember-promise-modals',
    'ember-scroll',
    'ember-simple-auth',
    'ember-test-selectors',
    'qunit-console-grouper',
    'qunit-dom',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
