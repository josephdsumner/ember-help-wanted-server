const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'fatsoma',
  repositoryNames: ['ember-cli-honeybadger-io'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
