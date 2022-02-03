const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'lolmaus',
  repositoryNames: ['ember-element-query'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
