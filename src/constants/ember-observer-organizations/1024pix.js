const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: '1024pix',
  repositoryNames: [
    'ember-cli-matomo-tag-manager',
    'ember-testing-library',
    'pix-ui',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
