const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-truncate',
  repositoryNames: ['ember-truncate'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
