const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'dmuneras',
  repositoryNames: ['ember-data-erd', 'ember-place-autocomplete'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
