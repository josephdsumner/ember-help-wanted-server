const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-lifeline',
  repositoryNames: ['ember-lifeline'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
