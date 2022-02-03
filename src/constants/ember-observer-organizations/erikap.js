const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'erikap',
  repositoryNames: ['ember-browser-update'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
