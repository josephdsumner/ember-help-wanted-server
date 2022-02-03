const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Windvis',
  repositoryNames: [
    'ember-breadcrumb-trail',
    'ember-router-service-refresh-polyfill',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
