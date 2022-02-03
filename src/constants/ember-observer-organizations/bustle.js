const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bustle',
  repositoryNames: ['ember-mobiledoc-editor'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
