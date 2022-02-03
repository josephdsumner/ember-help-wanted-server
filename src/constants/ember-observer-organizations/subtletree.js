const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'subtletree',
  repositoryNames: ['ember-paper-link'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
