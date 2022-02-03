const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'nypublicradio',
  repositoryNames: [
    'ember-hifi',
    'nypr-audio-services',
    'nypr-design-system',
    'nypr-django-for-ember',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
