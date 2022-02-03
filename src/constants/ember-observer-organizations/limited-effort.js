const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'limited-effort',
  repositoryNames: ['ember-member-actions'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
