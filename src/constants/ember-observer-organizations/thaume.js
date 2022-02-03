const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'thaume',
  repositoryNames: ['ember-cli-uuid'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
