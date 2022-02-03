const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'kybishop',
  repositoryNames: ['ember-attacher', 'ember-popper'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
