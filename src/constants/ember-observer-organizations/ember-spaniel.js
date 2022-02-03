const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-spaniel',
  repositoryNames: ['ember-spaniel'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
