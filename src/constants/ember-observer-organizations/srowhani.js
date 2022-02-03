const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'srowhani',
  repositoryNames: ['ember-artisans'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
