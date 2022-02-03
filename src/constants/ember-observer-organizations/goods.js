const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'goods',
  repositoryNames: ['ember-app-version', 'ember-assembly', 'ember-goods'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
