const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'amiel',
  repositoryNames: ['ember-data-url-templates'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
