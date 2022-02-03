const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bustlelabs',
  repositoryNames: ['ember-mobiledoc-dom-renderer'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
