'use strict';

angular.module('thistleWindApp.auth', [
  'thistleWindApp.constants',
  'thistleWindApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
