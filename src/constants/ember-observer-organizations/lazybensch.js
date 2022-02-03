const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'lazybensch',
  repositoryNames: ['ember-cli-filter-by-query'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
