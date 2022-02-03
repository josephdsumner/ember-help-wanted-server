const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'hjdivad',
  repositoryNames: ['ember-m3'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
