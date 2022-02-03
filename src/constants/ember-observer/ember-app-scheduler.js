const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-app-scheduler',
  repositoryNames: ['ember-app-scheduler'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
