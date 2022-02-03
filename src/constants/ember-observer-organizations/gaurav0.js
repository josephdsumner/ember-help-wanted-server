const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'gaurav0',
  repositoryNames: [
    'ember-glue/packages/@ember-glue/button',
    'ember-glue/packages/@ember-glue/menu',
    'ember-glue/packages/@ember-glue/toggle',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
