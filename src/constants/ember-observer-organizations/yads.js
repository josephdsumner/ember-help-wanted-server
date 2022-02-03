const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'yads',
  repositoryNames: ['ember-mocha'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
