const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-cli',
  repositoryNames: [
    'ember-ajax',
    'ember-cli-app-version',
    'ember-cli-htmlbars',
    'ember-cli-htmlbars-inline-precompile',
    'ember-cli-terser',
    'ember-cli-update',
    'ember-exam',
    'ember-fetch',
    'ember-load-initializers',
    'ember-page-title',
    'ember-resolver',
    'ember-try',
    'ember-welcome-page',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
