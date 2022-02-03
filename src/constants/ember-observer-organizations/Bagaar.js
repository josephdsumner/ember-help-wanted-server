const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Bagaar',
  repositoryNames: [
    'ember-breadcrumbs',
    'ember-graphql-mocking',
    'ember-pagination',
    'ember-permissions',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
