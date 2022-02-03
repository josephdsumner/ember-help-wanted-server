const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'fpauser',
  repositoryNames: ['ember-simplebar'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
