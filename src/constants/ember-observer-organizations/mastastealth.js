const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mastastealth',
  repositoryNames: ['ember-build-attr-modifier'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
