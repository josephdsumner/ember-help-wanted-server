const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'cah-johnryan',
  repositoryNames: ['ember-d3-modifiers'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
