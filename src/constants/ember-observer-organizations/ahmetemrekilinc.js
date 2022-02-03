const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'ahmetemrekilinc',
  repositoryNames: [
    'ember-cli-data-export',
    'ember-colpick',
    'ember-currencies',
    'ember-html-table-to-excel',
    'ember-mask-input',
    'ember-time-enabled-pikaday',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
