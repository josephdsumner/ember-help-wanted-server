const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'adopted-ember-addons',
  repositoryNames: [
    'active-model-adapter',
    'ember-cli-bugsnag',
    'ember-collapsible-panel',
    'ember-collection',
    'ember-data-factory-guy',
    'ember-data-model-fragments',
    'ember-electron',
    'ember-file-upload',
    'ember-keyboard',
    'ember-metrics',
    'ember-moment',
    'ember-notify',
    'ember-pikaday',
    'ember-sortable',
    'ember-stripe-elements',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
