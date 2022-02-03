const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'pengxiaobao',
  repositoryNames: ['sentry-javascript'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
