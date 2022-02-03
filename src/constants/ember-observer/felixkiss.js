const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'felixkiss',
  repositoryNames: ['ember-cli-deploy-ssh-execute'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
