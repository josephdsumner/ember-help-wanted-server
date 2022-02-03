const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mrloop',
  repositoryNames: ['ember-retry'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
