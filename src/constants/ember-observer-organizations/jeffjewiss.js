const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jeffjewiss',
  repositoryNames: ['ember-cli-postcss', 'ember-typeface'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
