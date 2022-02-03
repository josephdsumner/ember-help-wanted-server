const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'linc-technologies',
  repositoryNames: ['ember-tinymce'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
