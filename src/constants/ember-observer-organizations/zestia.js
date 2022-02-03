const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'zestia',
  repositoryNames: [
    'ember-async-tooltips',
    'ember-auto-focus',
    'ember-dragula',
    'ember-error-handling',
    'ember-expander',
    'ember-messages',
    'ember-modal-dialog',
    'ember-select-box',
    'ember-simple-infinite-scroller',
    'ember-twitter-entities',
    'ember-validation',
    'ember-wrap-urls',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
