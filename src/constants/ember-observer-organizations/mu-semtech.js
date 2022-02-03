const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mu-semtech',
  repositoryNames: ['ember-data-table'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
