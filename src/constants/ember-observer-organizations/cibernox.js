const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'cibernox',
  repositoryNames: [
    'ember-assign-helper',
    'ember-basic-dropdown',
    'ember-cli-accounting',
    'ember-native-dom-helpers',
    'ember-power-calendar',
    'ember-power-calendar-luxon',
    'ember-power-datepicker',
    'ember-power-select',
    'ember-power-select-typeahead',
    'ember-power-select-with-create',
    'ember-text-measurer',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
