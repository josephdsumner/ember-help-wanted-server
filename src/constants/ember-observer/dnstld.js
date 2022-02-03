const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dnstld',
  repositoryNames: ['ember-progress-bars'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
