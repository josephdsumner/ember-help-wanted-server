const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'patricklx',
  repositoryNames: [
    'carbon-components-ember',
    'ember-bscomponents',
    'ember-hbs-imports',
    'ember-simple-mu-resolver',
    'ember-template-helper-imports',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
