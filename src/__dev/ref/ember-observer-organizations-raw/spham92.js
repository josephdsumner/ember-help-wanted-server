const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'spham92',
  repositoryNames: ['ember-performance-tracking'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
