const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'adfinis-sygroup',
  repositoryNames: [
    'ember-ebau-gwr',
    'ember-simple-auth-oidc',
    'ember-uikit',
    'ember-uikit-adsy-theme',
    'ember-validated-form',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
