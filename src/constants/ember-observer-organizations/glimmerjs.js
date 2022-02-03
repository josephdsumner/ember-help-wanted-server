const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'glimmerjs',
  repositoryNames: ['glimmer-experimental', 'glimmer.js'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
