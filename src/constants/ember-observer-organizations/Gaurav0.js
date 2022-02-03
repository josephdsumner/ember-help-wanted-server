const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Gaurav0',
  repositoryNames: ['ember-cli-deploy-s3-pack'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
