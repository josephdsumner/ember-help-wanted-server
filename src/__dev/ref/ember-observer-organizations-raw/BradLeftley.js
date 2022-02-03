const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'BradLeftley',
  repositoryNames: ['ember-scroll-spy'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
