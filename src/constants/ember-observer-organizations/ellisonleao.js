const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ellisonleao',
  repositoryNames: ['sharer.js'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
