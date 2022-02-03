const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bitbird-dev',
  repositoryNames: ['bitbird.core.ember.ui'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
