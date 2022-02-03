const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'shipshapecode',
  repositoryNames: [
    'ember-3d-nav',
    'ember-assign-polyfill',
    'ember-cli-capacitor',
    'ember-cli-netlify',
    'ember-flatpickr',
    'ember-math-helpers',
    'ember-meta',
    'ember-prism',
    'ember-shepherd',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
