const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mharris717',
  repositoryNames: ['ember-drag-drop'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
