const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'davidbilling',
  repositoryNames: ['ember-cli-cloudinary-light', 'ember-cli-time-input'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
