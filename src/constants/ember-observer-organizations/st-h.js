const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'st-h',
  repositoryNames: [
    'ember-content-editable',
    'ember-content-editable-modifier',
    'ember-file-drop-zone',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
