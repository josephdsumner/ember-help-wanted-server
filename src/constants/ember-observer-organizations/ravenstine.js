const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ravenstine',
  repositoryNames: ['ember-custom-elements'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
