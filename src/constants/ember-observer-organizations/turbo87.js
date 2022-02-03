const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'turbo87',
  repositoryNames: ['ember-cli-deploy-ftp'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
