const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'maxfierke',
  repositoryNames: ['ember-concurrency-retryable'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
