const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'buschtoens',
  repositoryNames: [
    'ember-cli-resolve-asset',
    'ember-engine-router-service',
    'ember-event-helpers',
    'ember-lazy-mount',
    'ember-lifeline-decorators',
    'ember-link',
    'ember-on-modifier',
    'ember-render-helpers',
    'ember-routing-utils',
    'ember-runloop-decorators',
    'ember-service-helper',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
