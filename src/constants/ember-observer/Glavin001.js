const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Glavin001',
  repositoryNames: ['ember-c3', 'ember-jsoneditor'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
