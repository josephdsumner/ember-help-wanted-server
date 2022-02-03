const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'nibynic',
  repositoryNames: [
    'ember-deep-buffered-proxy',
    'ember-form-builder',
    'ember-template-bread-crumbs',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
