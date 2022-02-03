const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'chrislopresto',
  repositoryNames: ['ember-freestyle'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
