const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'minichate',
  repositoryNames: ['ember-cli-conditional-compile'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
