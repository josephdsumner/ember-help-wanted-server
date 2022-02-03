const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-batcher',
  repositoryNames: ['ember-batcher'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
