const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'gdub22',
  repositoryNames: ['ember-cli-less'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
