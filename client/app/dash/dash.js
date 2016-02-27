'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl',
        authenticate: true,
        resolve: {
          trips: function($http) {
            return $http.get('api/users/me').then(function(res){
              var id = res.data._id;
              return $http.get('/api/trips/user/' + id).then(function(res) {
                return res.data;
              })

            })
          }
        }
      });
  });
