const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'hogansghost',
  repositoryNames: ['ember-dark-mode'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
