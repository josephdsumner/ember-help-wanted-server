const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ruslanzavacky',
  repositoryNames: ['ember-cli-ifa'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
