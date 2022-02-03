const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'he9qi',
  repositoryNames: ['ember-cli-deploy-alioss'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
