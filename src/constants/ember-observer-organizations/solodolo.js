const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'solodolo',
  repositoryNames: ['ember-cli-deploy-easy-ssh'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
