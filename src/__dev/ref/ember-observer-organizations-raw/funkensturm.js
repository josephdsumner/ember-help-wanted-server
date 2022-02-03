const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'funkensturm',
  repositoryNames: ['ember-local-storage'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
