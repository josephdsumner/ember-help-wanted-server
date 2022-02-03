const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mydea',
  repositoryNames: [
    'ember-cli-deploy-service-worker',
    'ember-date-components',
    'ember-indexeddb',
    'ember-minimal-service-worker',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
