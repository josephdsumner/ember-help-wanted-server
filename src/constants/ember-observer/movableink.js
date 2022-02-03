const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'movableink',
  repositoryNames: ['ember-bar-chart', 'fluid'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
