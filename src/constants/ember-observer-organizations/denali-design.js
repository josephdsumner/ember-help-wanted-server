const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'denali-design',
  repositoryNames: ['denali-ember'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
