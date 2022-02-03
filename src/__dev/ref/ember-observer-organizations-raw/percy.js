const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'percy',
  repositoryNames: ['ember-percy'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
