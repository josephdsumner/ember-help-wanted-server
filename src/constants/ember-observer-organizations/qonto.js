const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'qonto',
  repositoryNames: [
    'ember-amount-input',
    'ember-autofocus-modifier',
    'ember-phone-input',
    'ember-prismic-dom',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
