const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'makepanic',
  repositoryNames: ['ember-modal-dialog-lite'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
