const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'emberjs',
  repositoryNames: [
    'data',
    'data/tree/master/packages/adapter',
    'data/tree/master/packages/model',
    'data/tree/master/packages/serializer',
    'data/tree/master/packages/store',
    'ember-classic-decorator',
    'ember-copy',
    'ember-inflector',
    'ember-jquery',
    'ember-legacy-built-in-components',
    'ember-legacy-controllers',
    'ember-optional-features',
    'ember-ordered-set',
    'ember-qunit',
    'ember-render-modifiers',
    'ember-string',
    'ember-test-helpers',
    'ember-test-waiters',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
