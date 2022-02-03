const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'aboveproperty',
  repositoryNames: ['ember-drag-drop-polyfill'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
