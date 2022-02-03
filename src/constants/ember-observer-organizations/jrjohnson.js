const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jrjohnson',
  repositoryNames: ['ember-cli-image-transformer'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
