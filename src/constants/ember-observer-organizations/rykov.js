const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'rykov',
  repositoryNames: ['ember-cli-rails'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
