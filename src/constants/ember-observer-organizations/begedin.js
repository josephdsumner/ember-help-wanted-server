const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'begedin',
  repositoryNames: ['ember-select-list'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
