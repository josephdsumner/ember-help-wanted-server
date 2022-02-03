const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ef4',
  repositoryNames: [
    'ember-auto-import',
    'ember-data-relationship-tracker',
    'ember-elsewhere',
    'ember-overlays',
    'ember-resource-metadata',
    'ember-root-url',
    'ember-set-body-class',
    'memory-scroll',
    'prember',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
