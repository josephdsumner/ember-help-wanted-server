const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'GCheung55',
  repositoryNames: ['ember-vega'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
