const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ClarkSource',
  repositoryNames: ['ember-auto-import-typescript', 'ember-lottie'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
