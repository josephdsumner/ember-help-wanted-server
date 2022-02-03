const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'stefanpenner',
  repositoryNames: ['ember-strict-resolver'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
