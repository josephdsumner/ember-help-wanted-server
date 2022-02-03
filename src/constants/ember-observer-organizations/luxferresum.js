const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'luxferresum',
  repositoryNames: [
    'ember-css-vars',
    'ember-simpler-set-helper',
    'experimental-set-route-component',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
