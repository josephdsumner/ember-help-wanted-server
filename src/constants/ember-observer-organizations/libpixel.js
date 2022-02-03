const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'libpixel',
  repositoryNames: ['ember-libpixel'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
