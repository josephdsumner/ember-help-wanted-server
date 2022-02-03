const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'uniplaces',
  repositoryNames: ['ember-cli-uniq'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
