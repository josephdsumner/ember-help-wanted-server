const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'betocantu93',
  repositoryNames: [
    'ember-handy-globals',
    'ember-paper-flatpickr',
    'ember-rison-qs',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
