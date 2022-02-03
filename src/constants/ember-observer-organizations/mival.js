const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mival',
  repositoryNames: ['ember-cli-deploy-passenger-plugin'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
