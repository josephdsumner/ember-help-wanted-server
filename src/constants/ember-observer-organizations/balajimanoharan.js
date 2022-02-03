const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'balajimanoharan',
  repositoryNames: ['ember-apexchartsjs'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
