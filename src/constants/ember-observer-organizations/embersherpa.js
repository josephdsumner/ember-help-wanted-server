const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'embersherpa',
  repositoryNames: ['ember-reactive-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
