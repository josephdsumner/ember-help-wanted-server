const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'davewasmer',
  repositoryNames: ['ember-cli-favicon'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
