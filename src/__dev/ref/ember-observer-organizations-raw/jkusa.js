const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'jkusa',
  repositoryNames: [
    'ember-arg-types',
    'ember-cli-clipboard',
    'ember-cli-sass-less',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
