const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'glavin001',
  repositoryNames: ['ember-c3', 'ember-jsoneditor'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
