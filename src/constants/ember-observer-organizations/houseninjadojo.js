const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'houseninjadojo',
  repositoryNames: ['ember-datadog-rum'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
