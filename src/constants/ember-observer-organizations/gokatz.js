const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'gokatz',
  repositoryNames: ['ember-sloth'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
