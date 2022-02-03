const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ciena-blueplanet',
  repositoryNames: ['ember-bunsen-core', 'ember-spread', 'ember-test-utils'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
