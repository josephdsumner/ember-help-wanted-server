const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'achambers',
  repositoryNames: ['ember-cli-deploy-git-revision-data'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
