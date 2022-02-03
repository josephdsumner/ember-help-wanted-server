const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'atsjj',
  repositoryNames: ['ember-cli-link-pre'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
