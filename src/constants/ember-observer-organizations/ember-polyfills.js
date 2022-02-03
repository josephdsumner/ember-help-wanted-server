const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-polyfills',
  repositoryNames: [
    'ember-cache-primitive-polyfill',
    'ember-cached-decorator-polyfill',
    'ember-destroyable-polyfill',
    'ember-in-element-polyfill',
    'ember-memo-decorator-polyfill',
    'ember-named-blocks-polyfill',
    'ember-tracked-storage-polyfill',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
