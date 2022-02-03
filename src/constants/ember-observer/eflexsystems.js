const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'eflexsystems',
  repositoryNames: [
    'ember-bootstrap',
    'ember-cli-coffeescript',
    'ember-cli-toggle',
    'ember-cli-webfont',
    'ember-cli-wizard',
    'ember-cp-validations',
    'ember-data-copyable',
    'ember-freestyle',
    'ember-power-select-infinity',
    'ember-spectrum-color-picker',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
