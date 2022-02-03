const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'authmaker',
  repositoryNames: ['authmaker-ember-simple-auth'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
