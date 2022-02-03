const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ijlee2',
  repositoryNames: ['ember-container-query'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
