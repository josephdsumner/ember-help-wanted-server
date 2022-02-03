const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rancher',
  repositoryNames: ['ember-api-store'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
