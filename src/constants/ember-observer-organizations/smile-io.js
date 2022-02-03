const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'smile-io',
  repositoryNames: ['ember-polaris'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
