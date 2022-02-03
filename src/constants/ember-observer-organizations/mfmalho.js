const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mfmalho',
  repositoryNames: ['ember-battery'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
