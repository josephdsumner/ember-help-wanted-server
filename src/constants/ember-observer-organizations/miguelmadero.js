const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'miguelmadero',
  repositoryNames: ['ember-cli-bundle-loader'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
