const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'greatwizard',
  repositoryNames: ['ember-circleci'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
