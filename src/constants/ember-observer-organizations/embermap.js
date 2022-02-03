const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'embermap',
  repositoryNames: ['ember-cli-fastboot-testing', 'ember-data-storefront'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
