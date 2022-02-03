const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'mansona',
  repositoryNames: [
    'ember-body-class',
    'ember-cli-notifications',
    'ember-deprecation-error',
    'ember-get-config',
    'ember-html-excerpt',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
