const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'paulcwatts',
  repositoryNames: ['ember-cognito'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
