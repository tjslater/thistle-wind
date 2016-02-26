'use strict';

angular.module('thistleWindApp')
<<<<<<< HEAD
  .config(function($stateProvider) {
=======
  .config(function ($stateProvider) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
<<<<<<< HEAD
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'main';
          Auth.logout();
          $state.go(referrer);
        }
=======
        controller: 'LoginCtrl'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
<<<<<<< HEAD
        controller: 'SignupController',
        controllerAs: 'vm'
=======
        controller: 'SignupCtrl'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
<<<<<<< HEAD
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
=======
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
