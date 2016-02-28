'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shopping', {
        url: '/shopping',
        templateUrl: 'app/shopping/shopping.html',
        controller: 'ShoppingCtrl',
        authenticate: true,
        resolve: {
          clothing: function($http){

            var key = 'uid329-33137427-19';
            var url = 'http://api.shopstyle.com/api/v2/products?pid=' + key + '&fts=wool+suit&offset=0&limit=20';
            return $http.get(url).then(function(res){
              return res.data;
            })
          }
        }
      });
  });
