const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'billybonks',
  repositoryNames: ['ember-cli-stylelint', 'empress-blog-dawn-template'],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
