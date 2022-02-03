const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'dollarshaveclub',
  repositoryNames: ['ember-responds-to'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
