const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'badmacstone',
  repositoryNames: ['fabulous-table'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
