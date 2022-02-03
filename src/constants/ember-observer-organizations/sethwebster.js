const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'sethwebster',
  repositoryNames: ['ember-cli-new-version'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
