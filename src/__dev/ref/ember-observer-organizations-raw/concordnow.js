const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'concordnow',
  repositoryNames: [
    'ember-aria-tabs',
    'ember-casl',
    'ember-concord-doc',
    'ember-content-loader',
    'ember-md-block',
    'ember-sidenotes',
    'tinymce-ember',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
