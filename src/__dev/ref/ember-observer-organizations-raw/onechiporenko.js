const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'onechiporenko',
  repositoryNames: [
    'ember-bootstrap-modals-manager',
    'ember-modals-manager-internal',
    'ember-models-table',
    'ember-paper-modals-manager',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
