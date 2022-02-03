const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-template-imports',
  repositoryNames: ['ember-template-imports'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
