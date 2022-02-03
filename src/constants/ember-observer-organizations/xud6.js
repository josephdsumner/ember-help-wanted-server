const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'xud6',
  repositoryNames: ['ember-composability-tools', 'ember-paper-lite'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
