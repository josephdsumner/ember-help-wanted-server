const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rsschermer',
  repositoryNames: ['ember-spectrum-color-picker'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
