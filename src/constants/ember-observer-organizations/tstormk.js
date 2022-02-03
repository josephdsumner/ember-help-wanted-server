const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'tstormk',
  repositoryNames: ['ember-testing-library'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
