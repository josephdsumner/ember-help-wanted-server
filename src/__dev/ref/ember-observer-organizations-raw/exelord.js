const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'exelord',
  repositoryNames: ['ember-cli-deploy-netlify-cli'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
