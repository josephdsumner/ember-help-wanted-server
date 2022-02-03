const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'esri',
  repositoryNames: ['ember-animated-status-label'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
