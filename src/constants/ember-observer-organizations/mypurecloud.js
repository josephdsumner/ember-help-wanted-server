const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mypurecloud',
  repositoryNames: ['ember-multi-faceted-search', 'ember-webrtc-troubleshoot'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
