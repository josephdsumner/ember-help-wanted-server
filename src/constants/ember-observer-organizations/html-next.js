const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'html-next',
  repositoryNames: [
    'ember-gestures',
    'ember-raf-scheduler',
    'vertical-collection',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
