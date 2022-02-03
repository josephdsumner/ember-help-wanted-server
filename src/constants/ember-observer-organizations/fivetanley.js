const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'fivetanley',
  repositoryNames: ['ember-cli-dotenv', 'ember-promise-helpers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
