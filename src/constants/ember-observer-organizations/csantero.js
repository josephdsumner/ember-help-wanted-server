const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'csantero',
  repositoryNames: ['ember-sinon'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
