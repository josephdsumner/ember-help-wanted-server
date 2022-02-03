const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'empress',
  repositoryNames: [
    'ember-cli-showdown',
    'ember-showdown-prism',
    'empress-blog',
    'empress-blog-casper-template',
    'empress-blog-ghost-helpers',
    'field-guide',
    'field-guide-addon-docs-template',
    'field-guide-default-template',
    'guidemaker',
    'guidemaker-default-template',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
