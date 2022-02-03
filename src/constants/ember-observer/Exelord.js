const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Exelord',
  repositoryNames: [
    'ember-await',
    'ember-cli-deploy-sentry-cli',
    'ember-initials',
    'ember-rollbar-client',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
