const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'systembugtj',
  repositoryNames: [
    'ember-auto-image',
    'ember-highlightjs',
    'ember-image-utils',
    'ember-split-view',
    'ember-tree-utils',
    'ember-tree-view',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
