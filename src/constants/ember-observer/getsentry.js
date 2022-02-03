const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'getsentry',
  repositoryNames: ['sentry-javascript'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
