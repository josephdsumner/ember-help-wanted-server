const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'CondeNast',
  repositoryNames: ['ember-cli-content-for-index'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
