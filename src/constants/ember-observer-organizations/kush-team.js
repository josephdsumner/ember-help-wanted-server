const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kush-team',
  repositoryNames: ['ember-fragment-route'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
