const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'iconify',
  repositoryNames: ['iconify'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
