const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'andybluntish',
  repositoryNames: ['ember-cli-replace'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
