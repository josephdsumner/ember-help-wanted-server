const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ctjhoa',
  repositoryNames: ['ember-unique-id-helper-polyfill'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
