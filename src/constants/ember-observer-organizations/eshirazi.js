const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'eshirazi',
  repositoryNames: ['ember-resizable-table'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
