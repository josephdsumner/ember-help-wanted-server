const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'peec',
  repositoryNames: ['ember-css-transitions'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
