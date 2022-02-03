const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jennyjudova',
  repositoryNames: ['empress-blog-argon-template'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
