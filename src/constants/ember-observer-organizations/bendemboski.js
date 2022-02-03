const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bendemboski',
  repositoryNames: ['ember-concurrency-test-waiter'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
