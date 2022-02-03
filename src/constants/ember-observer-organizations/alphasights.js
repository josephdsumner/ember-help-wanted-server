const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'alphasights',
  repositoryNames: ['ember-graphql-adapter', 'ember-scrollable'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
