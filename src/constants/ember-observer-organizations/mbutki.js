const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mbutki',
  repositoryNames: ['ember-vendor-split'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
