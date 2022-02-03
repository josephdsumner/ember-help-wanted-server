const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ember-cli-deploy',
  repositoryNames: [
    'ember-cli-deploy-display-revisions',
    'ember-cli-deploy-gzip',
    'ember-cli-deploy-lightning-pack',
    'ember-cli-deploy-manifest',
    'ember-cli-deploy-redis',
    'ember-cli-deploy-s3',
    'ember-cli-deploy-s3-index',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
