const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'machty',
  repositoryNames: [
    'ember-concurrency',
    'ember-concurrency-decorators',
    'ember-maybe-import-regenerator',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
