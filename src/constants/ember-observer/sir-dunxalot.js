const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sir-dunxalot',
  repositoryNames: [
    'ember-cli-concat',
    'ember-google-charts',
    'ember-new-relic',
    'ember-tooltips',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
