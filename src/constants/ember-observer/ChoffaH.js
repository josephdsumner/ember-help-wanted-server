const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ChoffaH',
  repositoryNames: ['ember-cookieconsent'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
