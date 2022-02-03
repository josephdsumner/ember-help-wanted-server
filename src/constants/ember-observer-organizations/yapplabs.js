const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'yapplabs',
  repositoryNames: [
    'broccoli-asset-prepend',
    'ember-buffered-proxy',
    'ember-cli-base64-css',
    'ember-cli-nearley-compiler',
    'ember-data-utils',
    'ember-modal-dialog',
    'ember-nav-stack',
    'ember-simulant-test-helpers',
    'ember-tether',
    'ember-wormhole',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
