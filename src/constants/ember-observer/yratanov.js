const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'yratanov',
  repositoryNames: ['ember-page-object-asserts'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
