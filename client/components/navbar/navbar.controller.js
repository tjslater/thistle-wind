'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $scope) {
    this.ngScope_ = $scope;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.showModal = false;
  }

  toggleModal(){
    this.showModal = !this.showModal;
    this.ngScope_.$broadcast('togglemodal', this.showModal);
  }


}

angular.module('thistleWindApp')
  .controller('NavbarController', NavbarController);
