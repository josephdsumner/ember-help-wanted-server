const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'alexdiliberto',
  repositoryNames: ['ember-transformicons'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
