const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'smith-carson',
  repositoryNames: ['ember-pdf-js', 'ember-simplemde'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
