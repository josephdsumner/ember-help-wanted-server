const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'san650',
  repositoryNames: ['ember-cli-page-object'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
