const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sivakumar-kailasam',
  repositoryNames: ['ember-purify'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
