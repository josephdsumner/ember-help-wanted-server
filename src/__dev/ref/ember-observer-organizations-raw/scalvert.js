const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'scalvert',
  repositoryNames: ['ember-date-service'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
