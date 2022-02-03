const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'makemusicinc',
  repositoryNames: ['ember-config-cat'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
