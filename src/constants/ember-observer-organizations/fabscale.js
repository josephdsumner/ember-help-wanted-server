const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'fabscale',
  repositoryNames: ['ember-cognito-identity', 'ember-layout-components'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
