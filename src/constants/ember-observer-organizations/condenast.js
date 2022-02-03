const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'condenast',
  repositoryNames: ['ember-cli-content-for-index'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
