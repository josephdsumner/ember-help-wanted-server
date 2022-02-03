const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'esbanarango',
  repositoryNames: ['ember-model-validator'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
