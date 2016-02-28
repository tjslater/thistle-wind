'use strict';

angular.module('thistleWindApp')
  .factory('Onboarding', function () {
    // Service logic
    // ...


    var choices = [
      {
        text: "You’ve been known to look magnificent in [business casual] outfits",
        img: "",
        selected: false,
        class: "",
        bgs: [
          'outfit1bg'
        ],
        overlay: {
          text: "business casual",
          id: "dialog1"
        }
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "that are also a little [rough around the edges].",
        img: "",
        selected: false,
        class: "",
        bgs: [
          'outfit4bg',
          'outfit4bg2'
        ],
        overlay: {
          text: "rough around the edges",
          id: "dialog2"
        }
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "But you’re scarcely less well dressed in [sneaker smart] duds",
        img: "",
        selected: false,
        class: "",
        bgs: [
          'outfit6bg',
          'outfit6bg2'
        ],
        overlay: {
          text: "sneaker smart",
          id: "dialog3"
        }
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "",
        img: "",
        selected: false,
        class: ""
      },
      {
        text: "that keep things [simple and sharp]",
        img: "",
        selected: false,
        class: "",
        bgs: [
          'outfit11bg',
          'outfit11bg'
        ],
        overlay: {
          text: "simple and sharp",
          id: "dialog4"
        }

      }
    ];

    // Public API here
    return {
      choices: choices
    };
  });
