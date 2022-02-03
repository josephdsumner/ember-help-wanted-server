const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mixonic',
  repositoryNames: ['ember-cli-deprecation-workflow'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
