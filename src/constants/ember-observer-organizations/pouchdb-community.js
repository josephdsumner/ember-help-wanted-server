const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'pouchdb-community',
  repositoryNames: ['ember-pouch'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
