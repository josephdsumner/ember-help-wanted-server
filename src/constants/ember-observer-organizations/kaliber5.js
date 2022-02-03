const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'kaliber5',
  repositoryNames: [
    'ember-behave',
    'ember-bootstrap',
    'ember-bootstrap-changeset-validations',
    'ember-bootstrap-cp-validations',
    'ember-bootstrap-power-select',
    'ember-cli-bundle-analyzer',
    'ember-cli-deploy-cloudformation',
    'ember-cli-lazysizes',
    'ember-cli-yadda',
    'ember-cli-yadda-opinionated',
    'ember-drag-sort',
    'ember-ecsy-babylon',
    'ember-embedded-snippet',
    'ember-lazy-responsive-image',
    'ember-loading',
    'ember-responsive-image',
    'ember-stargate',
    'ember-window-mock',
    'select-sass-theme',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
