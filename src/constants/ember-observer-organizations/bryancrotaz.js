const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'bryancrotaz',
  repositoryNames: ['ember-cli-csp-style', 'ember-tracked-effects-placeholder'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
