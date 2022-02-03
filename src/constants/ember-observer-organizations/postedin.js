const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'postedin',
  repositoryNames: ['ember-ckeditor', 'ember-google-analytics'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
