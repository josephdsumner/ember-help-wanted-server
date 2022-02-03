const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'igorkvasn',
  repositoryNames: ['ember-notifyme', 'ember-quill'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
