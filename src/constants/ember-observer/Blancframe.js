const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Blancframe',
  repositoryNames: ['ember-blanc-slider'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
