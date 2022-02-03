const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'sandydoo',
  repositoryNames: [
    'ember-google-maps',
    'ember-google-maps-markerclustererplus',
    'ember-is-mobile',
    'tracked-maps-and-sets',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
