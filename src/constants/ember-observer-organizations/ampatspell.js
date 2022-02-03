const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ampatspell',
  repositoryNames: [
    'ember-cli-remark-static',
    'ember-cli-sketch',
    'ember-cli-zuglet',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
