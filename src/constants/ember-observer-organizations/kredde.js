const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kredde',
  repositoryNames: ['ember-error-tracker'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
