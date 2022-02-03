const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dockyard',
  repositoryNames: [
    'ember-cli-custom-assertions',
    'ember-in-viewport',
    'ember-one-way-select',
    'ember-router-scroll',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
