const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'precisionnutrition',
  repositoryNames: ['ember-cli-deploy-pn-pack'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
