const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'practicefusion',
  repositoryNames: ['ember-signature-pad'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
