const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jmurphyau',
  repositoryNames: ['ember-truth-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
