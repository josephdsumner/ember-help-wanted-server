const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'DockYard',
  repositoryNames: [
    'ember-composable-helpers',
    'ember-maybe-in-element',
    'ember-service-worker',
    'ember-service-worker-index',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
