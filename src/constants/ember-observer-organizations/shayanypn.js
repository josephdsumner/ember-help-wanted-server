const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'shayanypn',
  repositoryNames: ['ember-cli-highlighjs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
