const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kimroen',
  repositoryNames: ['ember-cli-autoprefixer', 'ember-cli-document-title'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
