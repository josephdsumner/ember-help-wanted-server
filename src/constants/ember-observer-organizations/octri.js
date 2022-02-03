const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'octri',
  repositoryNames: ['ember-i18next'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
