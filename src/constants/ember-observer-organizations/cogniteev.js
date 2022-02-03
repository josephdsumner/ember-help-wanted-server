const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'cogniteev',
  repositoryNames: ['ember-cli-rison'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
