const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'lonero-team',
  repositoryNames: ['decentralized-internet'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
