const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'alwarg',
  repositoryNames: ['ember-mirage-gen'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
