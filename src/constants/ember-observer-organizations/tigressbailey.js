const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'tigressbailey',
  repositoryNames: ['ember-cli-page-progress'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
