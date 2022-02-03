const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'funtusov',
  repositoryNames: ['ember-cli-form-data'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
