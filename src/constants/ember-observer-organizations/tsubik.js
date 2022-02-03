const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'tsubik',
  repositoryNames: ['ember-side-menu'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
