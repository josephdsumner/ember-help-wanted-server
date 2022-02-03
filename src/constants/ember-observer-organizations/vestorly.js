const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'vestorly',
  repositoryNames: ['ember-cli-emblem'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
