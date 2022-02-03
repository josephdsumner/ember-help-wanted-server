const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'freshbooks',
  repositoryNames: ['ember-responsive'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
