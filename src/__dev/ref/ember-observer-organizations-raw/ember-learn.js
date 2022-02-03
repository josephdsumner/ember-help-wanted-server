const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-learn',
  repositoryNames: [
    'ember-cli-addon-docs',
    'ember-cli-addon-docs-esdoc',
    'ember-cli-addon-docs-yuidoc',
    'ember-styleguide',
    'empress-blog-ember-template',
    'guidemaker-ember-template',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
