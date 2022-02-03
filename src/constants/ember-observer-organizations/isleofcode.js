const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'isleofcode',
  repositoryNames: ['corber'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
