const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'patcoll',
  repositoryNames: ['ember-concerns'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
