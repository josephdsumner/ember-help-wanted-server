const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'oa-pass',
  repositoryNames: ['ember-fedora-adapter'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
