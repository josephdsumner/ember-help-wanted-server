const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mikkopaderes',
  repositoryNames: ['ember-cloud-firestore-adapter', 'ember-firebase-service'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
