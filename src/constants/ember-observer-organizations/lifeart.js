const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'lifeart',
  repositoryNames: [
    'ember-ast-hot-load',
    'ember-blurhash',
    'ember-class-modifier',
    'ember-cli-jsx-templates',
    'ember-click-outside-modifier',
    'ember-fast-cli',
    'ember-ref-bucket',
    'ember-ref-modifier',
    'ember-template-import-decorators',
    'glimmer-composition-api',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
