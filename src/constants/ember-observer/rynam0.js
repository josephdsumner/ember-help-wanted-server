const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'rynam0',
  repositoryNames: ['ember-swagger-ui'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
