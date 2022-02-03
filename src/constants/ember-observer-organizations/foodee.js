const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'foodee',
  repositoryNames: ['ember-foxy-forms'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
