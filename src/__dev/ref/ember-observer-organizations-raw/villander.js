const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'villander',
  repositoryNames: ['ember-engines-router-service'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
