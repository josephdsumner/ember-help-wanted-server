const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kagemusha',
  repositoryNames: ['ember-phoenix-channel'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
