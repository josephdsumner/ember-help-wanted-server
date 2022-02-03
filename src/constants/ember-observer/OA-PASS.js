const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'OA-PASS',
  repositoryNames: ['ember-fedora-adapter'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
