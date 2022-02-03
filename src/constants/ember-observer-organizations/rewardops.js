const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rewardops',
  repositoryNames: [
    'ember-auto-import',
    'ember-react-components',
    'ember-test-helpers',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
