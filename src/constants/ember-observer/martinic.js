const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'martinic',
  repositoryNames: [
    'ember-cli-deploy-sftp',
    'ember-cli-markdown-editor',
    'ember-simple-auth-pouch',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
