const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'summit-electric-supply',
  repositoryNames: [
    'ember-cli-deploy-docker',
    'ember-cli-deploy-rollbar',
    'ember-cp-validations',
    'ember-peak-masked',
    'ember-peak-pager',
    'ember-peak-spinner',
    'ember-validators',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
