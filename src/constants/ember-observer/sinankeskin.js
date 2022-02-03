const GithubOrganization = require('../../classes/github-organization');
const githubOrganization = new GithubOrganization({
  organizationName: 'sinankeskin',
  repositoryNames: [
    'ember-animate-css',
    'ember-dayjs',
    'ember-h-captcha',
    'ember-img-loading',
    'ember-inputmask',
    'ember-kioskboard',
    'ember-lightpick',
    'ember-litepicker',
    'ember-micro-modal',
    'ember-microtip',
    'ember-notiflix',
    'ember-oauther',
    'ember-picker',
    'ember-simple-auth-oauther',
    'ember-swiper',
    'ember-swiper6',
    'ember-swiper7',
  ],
});
module.exports = githubOrganization.getReposWithSupportedLabels();
