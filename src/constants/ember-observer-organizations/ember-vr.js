const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-vr',
  repositoryNames: ['ember-aframe', 'ember-aframe-camera-extras'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
