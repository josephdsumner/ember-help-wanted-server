const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'mfeckie',
  repositoryNames: [
    'ember-cli-deploy-brotli',
    'ember-typescript-addon-blueprint',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
