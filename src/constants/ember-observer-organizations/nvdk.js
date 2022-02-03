const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'nvdk',
  repositoryNames: ['ember-config-helper'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
