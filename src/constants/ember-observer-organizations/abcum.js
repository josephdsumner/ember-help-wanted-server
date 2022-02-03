const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'abcum',
  repositoryNames: ['ascua'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
