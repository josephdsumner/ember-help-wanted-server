const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'btecu',
  repositoryNames: [
    'ember-cli-bootstrap-datetimepicker',
    'ember-cli-guid',
    'ember-select',
    'ember-simple-tree',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
