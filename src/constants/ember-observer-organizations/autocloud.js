const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'autocloud',
  repositoryNames: ['ember-cli-deploy-simply-ssh'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
