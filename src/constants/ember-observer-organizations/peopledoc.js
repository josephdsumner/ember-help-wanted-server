const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'peopledoc',
  repositoryNames: [
    'ember-auto-import-chunks-json-generator',
    'ember-cli-embedded',
    'ember-feature-controls',
    'ember-reading-time',
    'ember-slugify',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
