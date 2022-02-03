const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'cardstack',
  repositoryNames: ['cardstack', 'ember-toolbars'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
