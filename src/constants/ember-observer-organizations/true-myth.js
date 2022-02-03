const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'true-myth',
  repositoryNames: ['true-myth'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
