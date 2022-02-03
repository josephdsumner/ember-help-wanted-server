const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'jelhan',
  repositoryNames: [
    'ember-autoresize-modifier',
    'ember-local-storage-decorator',
    'ember-style-modifier',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
