const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'marucjmar',
  repositoryNames: ['ember-cli-tinymce'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
