'use strict';

angular.module('thistleWindApp')
  .factory('usercache', function (User) {

    var user = user || User.getCurrentUser();
    function save(userObject) {
      user = userObject;
    }

    function get() {
      return user;
    }



    // Public API here
    return {
      get: get,
      save: save
    };
  });
