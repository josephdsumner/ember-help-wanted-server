const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'projectcaluma',
  repositoryNames: ['ember-caluma', 'ember-emeis', 'ember-localized-model'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
