<<<<<<< HEAD
// Generated on 2016-02-26 using generator-angular-fullstack 3.3.0
=======
// Generated on 2016-02-26 using generator-angular-fullstack 2.1.1
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
'use strict';

module.exports = function (grunt) {
  var localConfig;
  try {
    localConfig = require('./server/config/local.env');
  } catch(e) {
    localConfig = {};
  }

  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    express: 'grunt-express-server',
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn',
    protractor: 'grunt-protractor-runner',
<<<<<<< HEAD
    buildcontrol: 'grunt-build-control',
    istanbul_check_coverage: 'grunt-mocha-istanbul',
    ngconstant: 'grunt-ng-constant'
=======
    buildcontrol: 'grunt-build-control'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    yeoman: {
      // configurable paths
      client: require('./bower.json').appPath || 'client',
<<<<<<< HEAD
      server: 'server',
=======
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      dist: 'dist'
    },
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
<<<<<<< HEAD
          script: '<%= yeoman.server %>',
=======
          script: 'server/app.js',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          debug: true
        }
      },
      prod: {
        options: {
<<<<<<< HEAD
          script: '<%= yeoman.dist %>/<%= yeoman.server %>'
=======
          script: 'dist/server/app.js'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch: {
<<<<<<< HEAD
      babel: {
        files: ['<%= yeoman.client %>/{app,components}/**/!(*.spec|*.mock).js'],
        tasks: ['newer:babel:client']
      },
      ngconstant: {
        files: ['<%= yeoman.server %>/config/environment/shared.js'],
        tasks: ['ngconstant']
      },
      injectJS: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/!(*.spec|*.mock).js',
          '!<%= yeoman.client %>/app/app.js'
        ],
        tasks: ['injector:scripts']
      },
      injectCss: {
        files: ['<%= yeoman.client %>/{app,components}/**/*.css'],
        tasks: ['injector:css']
      },
      mochaTest: {
        files: ['<%= yeoman.server %>/**/*.{spec,integration}.js'],
        tasks: ['env:test', 'mochaTest']
      },
      jsTest: {
        files: ['<%= yeoman.client %>/{app,components}/**/*.{spec,mock}.js'],
        tasks: ['newer:jshint:all', 'wiredep:test', 'karma']
      },
      injectSass: {
        files: ['<%= yeoman.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['injector:sass']
      },
      sass: {
        files: ['<%= yeoman.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['sass', 'postcss']
=======
      injectJS: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/*.js',
          '!<%= yeoman.client %>/{app,components}/**/*.spec.js',
          '!<%= yeoman.client %>/{app,components}/**/*.mock.js',
          '!<%= yeoman.client %>/app/app.js'],
        tasks: ['injector:scripts']
      },
      injectCss: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/*.css'
        ],
        tasks: ['injector:css']
      },
      mochaTest: {
        files: ['server/**/*.spec.js'],
        tasks: ['env:test', 'mochaTest']
      },
      jsTest: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/*.spec.js',
          '<%= yeoman.client %>/{app,components}/**/*.mock.js'
        ],
        tasks: ['newer:jshint:all', 'karma']
      },
      injectSass: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['injector:sass']
      },
      sass: {
        files: [
          '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer']
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
<<<<<<< HEAD
          '{.tmp,<%= yeoman.client %>}/{app,components}/**/*.{css,html}',
          '{.tmp,<%= yeoman.client %>}/{app,components}/**/!(*.spec|*.mock).js',
=======
          '{.tmp,<%= yeoman.client %>}/{app,components}/**/*.css',
          '{.tmp,<%= yeoman.client %>}/{app,components}/**/*.html',
          
          '{.tmp,<%= yeoman.client %>}/{app,components}/**/*.js',
          
          '!{.tmp,<%= yeoman.client %>}{app,components}/**/*.spec.js',
          '!{.tmp,<%= yeoman.client %>}/{app,components}/**/*.mock.js',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          '<%= yeoman.client %>/assets/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        }
      },
      express: {
<<<<<<< HEAD
        files: ['<%= yeoman.server %>/**/*.{js,json}'],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          spawn: false //Without this option specified express won't be reloaded
        }
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
=======
        files: [
          'server/**/*.{js,json}'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '<%= yeoman.client %>/.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
<<<<<<< HEAD
          jshintrc: '<%= yeoman.server %>/.jshintrc'
        },
        src: ['<%= yeoman.server %>/**/!(*.spec|*.integration).js']
      },
      serverTest: {
        options: {
          jshintrc: '<%= yeoman.server %>/.jshintrc-spec'
        },
        src: ['<%= yeoman.server %>/**/*.{spec,integration}.js']
      },
      all: ['<%= yeoman.client %>/{app,components}/**/!(*.spec|*.mock|app.constant).js'],
      test: {
        src: ['<%= yeoman.client %>/{app,components}/**/*.{spec,mock}.js']
      }
    },

    jscs: {
      options: {
        config: ".jscsrc"
      },
      main: {
        files: {
          src: [
            '<%= yeoman.client %>/app/**/*.js',
            '<%= yeoman.server %>/**/*.js'
          ]
        }
=======
          jshintrc: 'server/.jshintrc'
        },
        src: [
          'server/**/*.js',
          '!server/**/*.spec.js'
        ]
      },
      serverTest: {
        options: {
          jshintrc: 'server/.jshintrc-spec'
        },
        src: ['server/**/*.spec.js']
      },
      all: [
        '<%= yeoman.client %>/{app,components}/**/*.js',
        '!<%= yeoman.client %>/{app,components}/**/*.spec.js',
        '!<%= yeoman.client %>/{app,components}/**/*.mock.js'
      ],
      test: {
        src: [
          '<%= yeoman.client %>/{app,components}/**/*.spec.js',
          '<%= yeoman.client %>/{app,components}/**/*.mock.js'
        ]
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
<<<<<<< HEAD
            '<%= yeoman.dist %>/!(.git*|.openshift|Procfile)**'
=======
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/.openshift',
            '!<%= yeoman.dist %>/Procfile'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
<<<<<<< HEAD
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 version']})
        ]
=======
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/'
        }]
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Use nodemon to run server in debug mode with an initial breakpoint
    nodemon: {
      debug: {
<<<<<<< HEAD
        script: '<%= yeoman.server %>',
=======
        script: 'server/app.js',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8080/debug?port=5858');
              }, 500);
            });
          }
        }
      }
    },

<<<<<<< HEAD
    // Automatically inject Bower components into the app and karma.conf.js
    wiredep: {
      options: {
        exclude: [
          /bootstrap.js/,
          '/json3/',
          '/es5-shim/',
          /font-awesome\.css/,
          /bootstrap\.css/,
          /bootstrap-sass-official/,
          /bootstrap-social\.css/
        ]
      },
      client: {
        src: '<%= yeoman.client %>/index.html',
        ignorePath: '<%= yeoman.client %>/',
      },
      test: {
        src: './karma.conf.js',
        devDependencies: true
=======
    // Automatically inject Bower components into the app
    wiredep: {
      target: {
        src: '<%= yeoman.client %>/index.html',
        ignorePath: '<%= yeoman.client %>/',
        exclude: [/bootstrap-sass-official/, /bootstrap.js/, '/json3/', '/es5-shim/', /bootstrap.css/, /font-awesome.css/ ]
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      }
    },

    // Renames files for browser caching purposes
<<<<<<< HEAD
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/<%= yeoman.client %>/!(bower_components){,*/}*.{js,css}',
          '<%= yeoman.dist %>/<%= yeoman.client %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/<%= yeoman.client %>/assets/fonts/*'
        ]
=======
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/{,*/}*.js',
            '<%= yeoman.dist %>/public/{,*/}*.css',
            '<%= yeoman.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/assets/fonts/*'
          ]
        }
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.client %>/index.html'],
      options: {
<<<<<<< HEAD
        dest: '<%= yeoman.dist %>/<%= yeoman.client %>'
=======
        dest: '<%= yeoman.dist %>/public'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
<<<<<<< HEAD
      html: ['<%= yeoman.dist %>/<%= yeoman.client %>/{,!(bower_components)/**/}*.html'],
      css: ['<%= yeoman.dist %>/<%= yeoman.client %>/!(bower_components){,*/}*.css'],
      js: ['<%= yeoman.dist %>/<%= yeoman.client %>/!(bower_components){,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>/<%= yeoman.client %>',
          '<%= yeoman.dist %>/<%= yeoman.client %>/assets/images'
=======
      html: ['<%= yeoman.dist %>/public/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/public/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/public/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>/public',
          '<%= yeoman.dist %>/public/assets/images'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        ],
        // This is so we update image references in our ng-templates
        patterns: {
          js: [
            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
          ]
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.client %>/assets/images',
<<<<<<< HEAD
          src: '{,*/}*.{png,jpg,jpeg,gif,svg}',
          dest: '<%= yeoman.dist %>/<%= yeoman.client %>/assets/images'
=======
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/assets/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.client %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/assets/images'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat',
          src: '**/*.js',
          dest: '.tmp/concat'
        }]
      }
    },

<<<<<<< HEAD
    // Dynamically generate angular constant `appConfig` from
    // `server/config/environment/shared.js`
    ngconstant: {
      options: {
        name: 'thistleWindApp.constants',
        dest: '<%= yeoman.client %>/app/app.constant.js',
        deps: [],
        wrap: true,
        configPath: '<%= yeoman.server %>/config/environment/shared'
      },
      app: {
        constants: function() {
          return {
            appConfig: require('./' + grunt.config.get('ngconstant.options.configPath'))
          };
        }
      }
    },

=======
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: 'thistleWindApp',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'app/app.js'
      },
      main: {
        cwd: '<%= yeoman.client %>',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/templates.js'
      },
      tmp: {
        cwd: '.tmp',
        src: ['{app,components}/**/*.html'],
        dest: '.tmp/tmp-templates.js'
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
<<<<<<< HEAD
        html: ['<%= yeoman.dist %>/<%= yeoman.client %>/*.html']
=======
        html: ['<%= yeoman.dist %>/public/*.html']
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.client %>',
<<<<<<< HEAD
          dest: '<%= yeoman.dist %>/<%= yeoman.client %>',
=======
          dest: '<%= yeoman.dist %>/public',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'assets/images/{,*/}*.{webp}',
            'assets/fonts/**/*',
            'index.html'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
<<<<<<< HEAD
          dest: '<%= yeoman.dist %>/<%= yeoman.client %>/assets/images',
=======
          dest: '<%= yeoman.dist %>/public/assets/images',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= yeoman.dist %>',
          src: [
            'package.json',
<<<<<<< HEAD
            '<%= yeoman.server %>/**/*',
            '!<%= yeoman.server %>/config/local.env.sample.js'
=======
            'server/**/*'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.client %>',
        dest: '.tmp/',
        src: ['{app,components}/**/*.css']
      }
    },

    buildcontrol: {
      options: {
<<<<<<< HEAD
        dir: '<%= yeoman.dist %>',
=======
        dir: 'dist',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        commit: true,
        push: true,
        connectCommits: false,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      heroku: {
        options: {
          remote: 'heroku',
          branch: 'master'
        }
      },
      openshift: {
        options: {
          remote: 'openshift',
          branch: 'master'
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
<<<<<<< HEAD
      pre: [
        'injector:sass',
        'ngconstant'
      ],
      server: [
        'newer:babel:client',
        'sass',
      ],
      test: [
        'newer:babel:client',
=======
      server: [
        'sass',
      ],
      test: [
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        'sass',
      ],
      debug: {
        tasks: [
          'nodemon',
          'node-inspector'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
<<<<<<< HEAD
        'newer:babel:client',
        'sass',
        'imagemin'
=======
        'sass',
        'imagemin',
        'svgmin'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      options: {
<<<<<<< HEAD
        reporter: 'spec',
        require: 'mocha.conf.js',
        timeout: 5000 // set default mocha spec timeout
      },
      unit: {
        src: ['<%= yeoman.server %>/**/*.spec.js']
      },
      integration: {
        src: ['<%= yeoman.server %>/**/*.integration.js']
      }
    },

    mocha_istanbul: {
      unit: {
        options: {
          excludes: ['**/*.{spec,mock,integration}.js'],
          reporter: 'spec',
          require: ['mocha.conf.js'],
          mask: '**/*.spec.js',
          coverageFolder: 'coverage/server/unit'
        },
        src: '<%= yeoman.server %>'
      },
      integration: {
        options: {
          excludes: ['**/*.{spec,mock,integration}.js'],
          reporter: 'spec',
          require: ['mocha.conf.js'],
          mask: '**/*.integration.js',
          coverageFolder: 'coverage/server/integration'
        },
        src: '<%= yeoman.server %>'
      }
    },

    istanbul_check_coverage: {
      default: {
        options: {
          coverageFolder: 'coverage/**',
          check: {
            lines: 80,
            statements: 80,
            branches: 80,
            functions: 80
          }
        }
      }
=======
        reporter: 'spec'
      },
      src: ['server/**/*.spec.js']
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js'
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },

    env: {
      test: {
        NODE_ENV: 'test'
      },
      prod: {
        NODE_ENV: 'production'
      },
      all: localConfig
    },

<<<<<<< HEAD
    // Compiles ES6 to JavaScript using Babel
    babel: {
      options: {
        sourceMap: true,
        optional: [
          'es7.classProperties'
        ]
      },
      client: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.client %>',
          src: ['{app,components}/**/!(*.spec).js'],
          dest: '.tmp'
        }]
      },
      server: {
        options: {
          optional: ['runtime']
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.server %>',
          src: ['**/*.js'],
          dest: '<%= yeoman.dist %>/<%= yeoman.server %>'
        }]
      }
    },

=======
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    // Compiles Sass to CSS
    sass: {
      server: {
        options: {
<<<<<<< HEAD
=======
          loadPath: [
            '<%= yeoman.client %>/bower_components',
            '<%= yeoman.client %>/app',
            '<%= yeoman.client %>/components'
          ],
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          compass: false
        },
        files: {
          '.tmp/app/app.css' : '<%= yeoman.client %>/app/app.scss'
        }
      }
    },

    injector: {
<<<<<<< HEAD
      options: {},
=======
      options: {

      },
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      // Inject application script files into index.html (doesn't include bower)
      scripts: {
        options: {
          transform: function(filePath) {
<<<<<<< HEAD
            var yoClient = grunt.config.get('yeoman.client');
            filePath = filePath.replace('/' + yoClient + '/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          sort: function(a, b) {
            var module = /\.module\.js$/;
            var aMod = module.test(a);
            var bMod = module.test(b);
            // inject *.module.js first
            return (aMod === bMod) ? 0 : (aMod ? -1 : 1);
          },
=======
            filePath = filePath.replace('/client/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= yeoman.client %>/index.html': [
               [
<<<<<<< HEAD
                 '<%= yeoman.client %>/{app,components}/**/!(*.spec|*.mock).js',
                 '!{.tmp,<%= yeoman.client %>}/app/app.{js,ts}'
=======
                 
                 '{.tmp,<%= yeoman.client %>}/{app,components}/**/*.js',
                 
                 '!{.tmp,<%= yeoman.client %>}/app/app.js',               
                 '!{.tmp,<%= yeoman.client %>}/{app,components}/**/*.spec.js',
                 '!{.tmp,<%= yeoman.client %>}/{app,components}/**/*.mock.js'               
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
               ]
            ]
        }
      },

      // Inject component scss into app.scss
      sass: {
        options: {
          transform: function(filePath) {
<<<<<<< HEAD
            var yoClient = grunt.config.get('yeoman.client');
            filePath = filePath.replace('/' + yoClient + '/app/', '');
            filePath = filePath.replace('/' + yoClient + '/components/', '../components/');
=======
            filePath = filePath.replace('/client/app/', '');
            filePath = filePath.replace('/client/components/', '');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
            return '@import \'' + filePath + '\';';
          },
          starttag: '// injector',
          endtag: '// endinjector'
        },
        files: {
          '<%= yeoman.client %>/app/app.scss': [
            '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}',
            '!<%= yeoman.client %>/app/app.{scss,sass}'
          ]
        }
      },

      // Inject component css into index.html
      css: {
        options: {
          transform: function(filePath) {
<<<<<<< HEAD
            var yoClient = grunt.config.get('yeoman.client');
            filePath = filePath.replace('/' + yoClient + '/', '');
=======
            filePath = filePath.replace('/client/', '');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
            filePath = filePath.replace('/.tmp/', '');
            return '<link rel="stylesheet" href="' + filePath + '">';
          },
          starttag: '<!-- injector:css -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= yeoman.client %>/index.html': [
            '<%= yeoman.client %>/{app,components}/**/*.css'
          ]
        }
      }
    },
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'env:all', 'env:prod', 'express:prod', 'wait', 'open', 'express-keepalive']);
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'env:all',
<<<<<<< HEAD
        'concurrent:pre',
        'concurrent:server',
        'injector',
        'wiredep:client',
        'postcss',
=======
        'injector:sass', 
        'concurrent:server',
        'injector',
        'wiredep',
        'autoprefixer',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        'concurrent:debug'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'env:all',
<<<<<<< HEAD
      'concurrent:pre',
      'concurrent:server',
      'injector',
      'wiredep:client',
      'postcss',
=======
      'injector:sass', 
      'concurrent:server',
      'injector',
      'wiredep',
      'autoprefixer',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      'express:dev',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

<<<<<<< HEAD
  grunt.registerTask('test', function(target, option) {
=======
  grunt.registerTask('test', function(target) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    if (target === 'server') {
      return grunt.task.run([
        'env:all',
        'env:test',
<<<<<<< HEAD
        'mochaTest:unit',
        'mochaTest:integration'
=======
        'mochaTest'
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      ]);
    }

    else if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'env:all',
<<<<<<< HEAD
        'concurrent:pre',
        'concurrent:test',
        'injector',
        'postcss',
        'wiredep:test',
=======
        'injector:sass', 
        'concurrent:test',
        'injector',
        'autoprefixer',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        'karma'
      ]);
    }

    else if (target === 'e2e') {
<<<<<<< HEAD

      if (option === 'prod') {
        return grunt.task.run([
          'build',
          'env:all',
          'env:prod',
          'express:prod',
          'protractor'
        ]);
      }

      else {
        return grunt.task.run([
          'clean:server',
          'env:all',
          'env:test',
          'concurrent:pre',
          'concurrent:test',
          'injector',
          'wiredep:client',
          'postcss',
          'express:dev',
          'protractor'
        ]);
      }
    }

    else if (target === 'coverage') {

      if (option === 'unit') {
        return grunt.task.run([
          'env:all',
          'env:test',
          'mocha_istanbul:unit'
        ]);
      }

      else if (option === 'integration') {
        return grunt.task.run([
          'env:all',
          'env:test',
          'mocha_istanbul:integration'
        ]);
      }

      else if (option === 'check') {
        return grunt.task.run([
          'istanbul_check_coverage'
        ]);
      }

      else {
        return grunt.task.run([
          'env:all',
          'env:test',
          'mocha_istanbul',
          'istanbul_check_coverage'
        ]);
      }

=======
      return grunt.task.run([
        'clean:server',
        'env:all',
        'env:test',
        'injector:sass', 
        'concurrent:test',
        'injector',
        'wiredep',
        'autoprefixer',
        'express:dev',
        'protractor'
      ]);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    }

    else grunt.task.run([
      'test:server',
      'test:client'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
<<<<<<< HEAD
    'concurrent:pre',
    'concurrent:dist',
    'injector',
    'wiredep:client',
    'useminPrepare',
    'postcss',
=======
    'injector:sass', 
    'concurrent:dist',
    'injector',
    'wiredep',
    'useminPrepare',
    'autoprefixer',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
<<<<<<< HEAD
    'babel:server',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
=======
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
