const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pauln',
  repositoryNames: ['ember-spreadsheet-export'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
