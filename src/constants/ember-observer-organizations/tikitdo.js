const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'tikitdo',
  repositoryNames: ['ember-cli-deploy-zip-new'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
