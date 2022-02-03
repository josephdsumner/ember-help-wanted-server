const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-redux',
  repositoryNames: ['ember-redux'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
