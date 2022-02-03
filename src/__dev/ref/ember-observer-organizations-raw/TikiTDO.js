const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'TikiTDO',
  repositoryNames: ['ember-cli-deploy-zip-new'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
