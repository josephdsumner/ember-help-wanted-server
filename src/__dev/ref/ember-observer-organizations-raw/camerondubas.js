const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'camerondubas',
  repositoryNames: ['ember-cli-deploy-latest'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
