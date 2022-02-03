const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'vazgen7788',
  repositoryNames: ['glimmer-application-pipeline'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
