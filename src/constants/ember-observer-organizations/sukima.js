const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sukima',
  repositoryNames: [
    'ember-quine',
    'ember-tracked-polyfill',
    'ember-validity-modifier',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
