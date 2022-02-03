const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'effective-ember',
  repositoryNames: [
    'ember-cli-markdown-it-templates',
    'ember-metrics-matomo-adapter',
    'ember-showcase',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
