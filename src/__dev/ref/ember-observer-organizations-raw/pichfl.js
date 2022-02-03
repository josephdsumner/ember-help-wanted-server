const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pichfl',
  repositoryNames: ['ember-fathom'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
