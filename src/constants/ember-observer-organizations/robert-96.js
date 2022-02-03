const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'robert-96',
  repositoryNames: ['ember-build-time-data'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
