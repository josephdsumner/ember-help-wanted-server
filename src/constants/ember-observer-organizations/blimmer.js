const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'blimmer',
  repositoryNames: ['ember-cli-server-variables', 'ember-cli-shrug'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
