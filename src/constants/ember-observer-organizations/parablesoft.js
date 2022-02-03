const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'parablesoft',
  repositoryNames: ['ember-icon-radio-buttons'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
