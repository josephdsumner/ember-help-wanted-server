const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'devotox',
  repositoryNames: ['ember-cli-utilities'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
