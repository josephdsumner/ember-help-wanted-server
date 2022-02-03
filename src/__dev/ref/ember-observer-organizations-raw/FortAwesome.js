const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'FortAwesome',
  repositoryNames: ['ember-fontawesome'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
