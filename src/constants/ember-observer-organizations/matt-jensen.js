const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'matt-jensen',
  repositoryNames: ['ember-service-worker-emberfire-messaging'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
