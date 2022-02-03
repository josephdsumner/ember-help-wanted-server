const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'steveszc',
  repositoryNames: ['ember-cli-memory-leak-detector'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
