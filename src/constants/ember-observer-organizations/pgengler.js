const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'pgengler',
  repositoryNames: ['ember-showdown'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
