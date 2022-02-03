const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pzuraq',
  repositoryNames: [
    'ember-argument-types',
    'ember-compatibility-helpers',
    'ember-could-get-used-to-this',
    'ember-decorators-polyfill',
    'ember-prop-modifier',
    'ember-set-helper',
    'ember-simple-set-helper',
    'emberx-input',
    'firestore-m3',
    'tracked-built-ins',
    'tracked-maps-and-sets',
    'tracked-redux',
    'tracked-toolbox',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
