const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'customerio',
  repositoryNames: ['ember-cli-deploy-rest'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
