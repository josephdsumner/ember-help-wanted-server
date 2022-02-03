const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jdberrocal1',
  repositoryNames: ['ember-cli-deploy-new-relic-sourcemap'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
