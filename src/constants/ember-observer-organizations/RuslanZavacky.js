const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'RuslanZavacky',
  repositoryNames: ['ember-cli-ifa'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
