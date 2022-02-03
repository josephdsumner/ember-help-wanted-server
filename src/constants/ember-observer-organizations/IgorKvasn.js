const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'IgorKvasn',
  repositoryNames: ['ember-notifyme', 'ember-quill'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
