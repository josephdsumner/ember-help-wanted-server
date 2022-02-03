const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'dwickern',
  repositoryNames: [
    'broccoli-asset-rev-playframework',
    'ember-basic-tree',
    'ember-link-to-wrapper',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
