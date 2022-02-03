const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bitwise-development',
  repositoryNames: ['ember-cli-typedoc'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
