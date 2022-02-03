const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'knownasilya',
  repositoryNames: [
    'ember-cli-deploy-gcloud-storage',
    'ember-palette',
    'ember-shadow-dom',
    'ember-toastr',
    'ember-toggle',
    'google-maps-drawing-tools',
    'google-maps-markup',
    'pagination-pager',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
