const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mdehoog',
  repositoryNames: ['ember-data-has-many-query'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
