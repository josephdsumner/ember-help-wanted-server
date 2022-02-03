const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ilios',
  repositoryNames: ['common', 'ember-simple-charts'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
