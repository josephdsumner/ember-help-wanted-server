const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'lhz516',
  repositoryNames: ['ember-validators-octane'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
