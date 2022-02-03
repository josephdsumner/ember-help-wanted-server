const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'emojinx',
  repositoryNames: ['ember-emoji-picker'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
