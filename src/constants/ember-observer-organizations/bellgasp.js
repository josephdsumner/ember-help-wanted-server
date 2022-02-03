const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bellgasp',
  repositoryNames: ['ember-practical-oidc', 'ember-table-data'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
