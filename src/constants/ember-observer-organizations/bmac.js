const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bmac',
  repositoryNames: ['ember-cli-content-for-config'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
