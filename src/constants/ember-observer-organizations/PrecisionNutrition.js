const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'PrecisionNutrition',
  repositoryNames: [
    'avatar-image',
    'ember-body-scroll-lock',
    'ember-class-names-helper',
    'ember-default-helper',
    'ember-handle-keys-helper',
    'ember-new-version-detection',
    'ember-query-selector-helper',
    'ember-resize-observer-polyfill',
    'imgix-photo',
    'number-formatting',
    'qunit-sinon-assertions',
    'unit-utils',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
