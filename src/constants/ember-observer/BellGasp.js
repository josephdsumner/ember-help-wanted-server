const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'BellGasp',
  repositoryNames: ['ember-practical-oidc', 'ember-table-data'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
