const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'elwayman02',
  repositoryNames: [
    'ember-resize-modifier',
    'ember-scroll-modifiers',
    'ember-sinon-qunit',
    'ember-user-activity',
    'empress-blog-vintage-news-template',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
