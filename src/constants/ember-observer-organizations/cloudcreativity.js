const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'cloudcreativity',
  repositoryNames: ['ember-quill'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
