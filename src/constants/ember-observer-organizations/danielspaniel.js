const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'danielspaniel',
  repositoryNames: ['ember-data-change-tracker'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
