const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Kuzirashi',
  repositoryNames: ['ember-link-action'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
