const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'embroider-build',
  repositoryNames: ['embroider'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
