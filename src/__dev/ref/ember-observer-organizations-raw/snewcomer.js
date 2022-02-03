const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'snewcomer',
  repositoryNames: ['ember-short-number', 'ember-stateful-promise'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
