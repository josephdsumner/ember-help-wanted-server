const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'appuniversum',
  repositoryNames: ['ember-appuniversum'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
