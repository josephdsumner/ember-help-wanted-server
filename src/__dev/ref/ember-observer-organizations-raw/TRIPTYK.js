const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'TRIPTYK',
  repositoryNames: [
    'ember-base-form-validation',
    'ember-form-changeset-validations',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
