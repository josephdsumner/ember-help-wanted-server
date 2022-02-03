const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'duizendnegen',
  repositoryNames: [
    'ember-cli-deploy-azure-blob',
    'ember-cli-deploy-azure-tables',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
