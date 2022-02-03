const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'chrism',
  repositoryNames: ['ember-cli-deploy-log-url'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
