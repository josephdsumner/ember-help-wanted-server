const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'vivekmunde',
  repositoryNames: ['ember-m-css-loader', 'ember-m-js-loader'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
