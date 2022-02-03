const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'xg-wang',
  repositoryNames: ['ember-async-to-generator'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
