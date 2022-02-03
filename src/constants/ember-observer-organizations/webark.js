const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'webark',
  repositoryNames: ['ember-cli-styles', 'ember-list-walker'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
