const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'freshworks',
  repositoryNames: ['ember-sequential-render'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
