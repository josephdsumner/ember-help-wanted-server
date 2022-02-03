const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'chancancode',
  repositoryNames: ['ember-concurrency-async', 'ember-concurrency-ts'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
