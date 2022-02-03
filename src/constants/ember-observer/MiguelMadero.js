const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'MiguelMadero',
  repositoryNames: ['ember-cli-bundle-loader'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
