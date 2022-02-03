const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'froala',
  repositoryNames: ['ember-froala-editor'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
