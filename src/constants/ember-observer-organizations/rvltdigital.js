const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rvltdigital',
  repositoryNames: [
    'ember-form-model',
    'ember-global-loader',
    'ember-layout',
    'ember-object-validator',
    'ember-promise-proxy',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
