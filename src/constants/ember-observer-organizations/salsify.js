const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'salsify',
  repositoryNames: [
    'ember-cli-dependency-lint',
    'ember-css-modules',
    'ember-exclaim',
    'milestones',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
