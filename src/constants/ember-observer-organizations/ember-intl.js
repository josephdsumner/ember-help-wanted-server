const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'ember-intl',
  repositoryNames: ['decorators', 'ember-intl'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
