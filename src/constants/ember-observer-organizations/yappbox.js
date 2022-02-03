const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'yappbox',
  repositoryNames: ['ember-cli-deploy-yapp-pack'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
