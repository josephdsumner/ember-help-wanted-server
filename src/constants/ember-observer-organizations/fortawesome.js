const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'fortawesome',
  repositoryNames: ['ember-fontawesome'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
