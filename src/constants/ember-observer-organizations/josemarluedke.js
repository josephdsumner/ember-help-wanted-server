const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'josemarluedke',
  repositoryNames: [
    'docfy',
    'ember-cli-segment',
    'ember-focus-trap',
    'frontile',
    'glimmer-apollo',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
