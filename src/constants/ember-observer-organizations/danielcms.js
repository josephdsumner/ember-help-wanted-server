const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'danielcms',
  repositoryNames: ['ember-cli-deploy-circleci-revision'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
