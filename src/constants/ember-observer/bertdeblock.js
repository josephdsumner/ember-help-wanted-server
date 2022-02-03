const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bertdeblock',
  repositoryNames: ['ember-data-record-meta'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
