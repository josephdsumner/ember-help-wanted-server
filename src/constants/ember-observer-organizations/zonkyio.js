const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'zonkyio',
  repositoryNames: ['ember-liveagent', 'ember-web-app'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
