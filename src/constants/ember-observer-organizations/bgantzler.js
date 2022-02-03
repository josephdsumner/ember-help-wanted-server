const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bgantzler',
  repositoryNames: ['ember-mirage'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
