const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'blancframe',
  repositoryNames: ['ember-blanc-slider'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
