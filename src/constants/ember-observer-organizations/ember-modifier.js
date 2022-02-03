const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-modifier',
  repositoryNames: ['ember-modifier'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
