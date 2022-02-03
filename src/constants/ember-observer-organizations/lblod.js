const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'lblod',
  repositoryNames: [
    'ember-jobs-dashboard-engine',
    'ember-rdfa-editor',
    'ember-rdfa-editor-besluit-plugin',
    'ember-rdfa-editor-besluit-type-plugin',
    'ember-rdfa-editor-import-draft-decisions-plugin',
    'ember-rdfa-editor-roadsign-regulation-plugin',
    'ember-rdfa-editor-template-variable-plugin',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
