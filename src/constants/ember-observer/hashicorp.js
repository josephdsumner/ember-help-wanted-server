const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'hashicorp',
  repositoryNames: [
    'ember-cli-api-double',
    'flight/ember-flight-icons',
    'structure',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
