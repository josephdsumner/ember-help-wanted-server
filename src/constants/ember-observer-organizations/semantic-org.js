const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'semantic-org',
  repositoryNames: ['semantic-ui-ember'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
