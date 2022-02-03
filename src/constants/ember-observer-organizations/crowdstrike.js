const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'crowdstrike',
  repositoryNames: [
    'ember-aria',
    'ember-browser-services',
    'ember-resource-tasks',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
