const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'forge512',
  repositoryNames: ['ember-printable-pages'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
