const GithubOrganization = require('../../classes/github-organization');

const githubOrganization = new GithubOrganization({
  organizationName: 'onehilltech',
  repositoryNames: [
    'ember-blueprint-data',
    'ember-cli-css-helpers',
    'ember-cli-custom-properties',
    'ember-cli-deploy',
    'ember-cli-flipdown',
    'ember-cli-fullcalendar',
    'ember-cli-gatekeeper',
    'ember-cli-google',
    'ember-cli-input-helpers',
    'ember-cli-mdc',
    'ember-cli-mdc',
    'ember-cli-numeraljs',
    'ember-cli-spinkit',
    'ember-cli-storage',
    'ember-cli-stripejs',
    'ember-cli-styled',
    'ember-cli-upload',
  ],
});

module.exports = githubOrganization.getReposWithSupportedLabels();
