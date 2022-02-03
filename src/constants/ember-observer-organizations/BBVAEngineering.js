const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'BBVAEngineering',
  repositoryNames: [
    'cross-transition-end',
    'ember-alerter',
    'ember-cli-awesome-resolver',
    'ember-cli-custom-addons',
    'ember-cli-htmlbars-minifier',
    'ember-cli-intl-shake',
    'ember-cli-markdown-codefences',
    'ember-cli-polymer-bundler',
    'ember-cli-qunit-parameterize',
    'ember-cli-webcomponents-bundler',
    'ember-cli-workbox',
    'ember-collector-dispatcher',
    'ember-modal-service',
    'ember-route-helpers',
    'ember-route-promise-chain',
    'ember-state',
    'ember-storages',
    'ember-task-scheduler',
    'ember-web-workers',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
