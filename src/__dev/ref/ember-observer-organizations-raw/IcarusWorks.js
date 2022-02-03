const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'IcarusWorks',
  repositoryNames: ['ember-key-manager', 'ember-power-select'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
