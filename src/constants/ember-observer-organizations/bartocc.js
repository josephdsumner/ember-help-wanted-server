const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'bartocc',
  repositoryNames: ['ember-fui-less', 'ember-fui-modules'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
