const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'tildeio',
  repositoryNames: ['ember-async-await-helper', 'ember-element-helper'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
