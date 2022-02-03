const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'puppetlabs',
  repositoryNames: ['ivy-tabs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
