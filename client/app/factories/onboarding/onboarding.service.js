'use strict';

angular.module('thistleWindApp')
  .factory('Onboarding', function () {
    // Service logic
    // ...

    var choices = [
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      },
      {
        text: "",
        img: "",
        selected: false
      }
    ]

    // Public API here
    return {
      choices: choices
    };
  });
