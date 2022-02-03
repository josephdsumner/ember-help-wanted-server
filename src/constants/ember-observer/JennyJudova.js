const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'JennyJudova',
  repositoryNames: ['empress-blog-argon-template'],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
