const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ctwoolsey',
  repositoryNames: ['ember-paper-react'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
