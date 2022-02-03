const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'akshay-kr',
  repositoryNames: ['ember-scroll-to-target'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
