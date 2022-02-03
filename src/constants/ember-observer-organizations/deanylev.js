const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'deanylev',
  repositoryNames: ['ember-ladda-button', 'ember-textarea-auto-resize'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
