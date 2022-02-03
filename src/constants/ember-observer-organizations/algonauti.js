const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'algonauti',
  repositoryNames: ['ember-active-storage', 'ember-cable', 'ember-g-recaptcha'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
