const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bengala-tech',
  repositoryNames: ['ember-search-ui'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
