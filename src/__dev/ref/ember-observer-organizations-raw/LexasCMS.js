const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'LexasCMS',
  repositoryNames: ['ember-data-lexascms'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
