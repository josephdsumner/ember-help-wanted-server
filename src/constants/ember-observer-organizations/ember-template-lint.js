const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-template-lint',
  repositoryNames: ['ember-cli-template-lint'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
