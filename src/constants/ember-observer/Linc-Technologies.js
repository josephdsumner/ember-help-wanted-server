const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'Linc-Technologies',
  repositoryNames: ['ember-tinymce'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
