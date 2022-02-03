const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'workmanw',
  repositoryNames: ['ember-diff-attrs'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
