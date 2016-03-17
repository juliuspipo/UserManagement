(function () {
    'use strict';

    module.exports = function(grunt) {

        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);

        function arrayToCamelCase ( array ) {
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                newArray.push( toCamelCase(array[i]) );
            }
            return newArray;
        }


        function toCamelCase ( input ) {
            return input.replace( /-([a-z])/g, function ( g ) {
                return g[1].toUpperCase();
            } );
        }


        function concatenateCustomFiles () {
            var concatConfig = {
                options: {
                    separator: ';'
                },
                commons: {
                    src: appConfig.buildPath + '/commons/scripts/{,**/}*.js',
                    dest: appConfig.buildPath + '/commons/scripts/concat-scripts/commons-all.js'
                }
            };

            var concatenateCustomFiles = false;
            var configScripts = require( './' + appConfig.appPath + '/config-scripts-router/main-config-scripts.js' );
            appConfig['scripts-app'] = configScripts;

            for( var app in appConfig['scripts-app'] ){
                for( var task in appConfig['scripts-app'][app] ){
                    for (var i = 0; i < appConfig['scripts-app'][app][task].length; i++) {
                        appConfig['scripts-app'][app][task][i] = appConfig.buildPath + '/' + app + '/' + appConfig['scripts-app'][app][task][i];
                    }
                    concatConfig[ app + "-" + task ] = {
                        src: appConfig['scripts-app'][app][task],
                        dest: appConfig.buildPath + '/' + app + "/scripts/concat-scripts/" + task + "-all.js"
                    };
                }
                concatenateCustomFiles = true;
            }

            if ( !concatenateCustomFiles ) {
                for ( var j = 0; j < appConfig.apps.length; j++) {
                    concatConfig[appConfig.camelCaseApps[j]] = {
                        src: [appConfig.buildPath + '/' + appConfig.apps[j] + '/scripts/app.js', appConfig.buildPath + '/' + appConfig.apps[j] + '/scripts/{,**/}*.js'],
                        dest: appConfig.buildPath + '/' + appConfig.apps[j] + '/scripts/concat-scripts/' + appConfig.apps[j] + '-all.js'
                    };
                }
            }

            return concatConfig;
        }

        function uglify () {

            var uglifyConfig = {
                options: {
                    mangle: true
                },
            };

            for( var i = 0; i < appConfig.apps.length; i++ ){
                console.log( appConfig.apps[i] );
                uglifyConfig[ appConfig.apps[i] + "-uglify" ] = {
                    expand: true,
                    cwd: appConfig.buildPath + "/" + appConfig.apps[i] + "/scripts/concat-scripts",
                    src: [
                        '*.js',
                        '!**/*.min.js'
                    ],
                    dest: appConfig.buildPath + "/" + appConfig.apps[i] + "/scripts/concat-scripts",
                    ext: ".min.js",
                    extDot: "last"
                };
            }
            return uglifyConfig;
        }

        function server ( ) {
            var serverConfig = {
                bsFiles: {
                    src : [
                        appConfig.buildPath + '/**/*.css',
                        appConfig.buildPath + '/**/*.js',
                        appConfig.buildPath + '/**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: appConfig.buildPath,
                        index: "user-management/views/layout/layout.html"
                    }
                }
            };

            return serverConfig;
        }

        function watchSassCustom(){
            var watch = tasksConfig.watchTasksInitConfig( appConfig );

            for (var i = 0; i < appConfig.apps.length; i++) {
                watch[appConfig.camelCaseApps[i] + 'Sass'] = {
                    files: [ appConfig.appPath + '/' + appConfig.apps[i] + '/sass/**/*.scss' ],
                    tasks: [ 'sass:' + appConfig.camelCaseApps[i] ]
                };
            }

            return watch;
        }


        var appConfig = require('./appConfig');

        appConfig.camelCaseApps = arrayToCamelCase( appConfig.apps );

        var tasksConfig = require('grunt-task-config/main');

        // Project configuration.
        grunt.initConfig({

            // Sets the app configuration
            appConfig: appConfig,

            // Read the package json
            pkg: grunt.file.readJSON('package.json'),

            // Before generating any new files, remove any previously-created files.
            clean: tasksConfig.cleanInitTasksConfig( appConfig ),

            // Validate all the javascript files
            jshint: tasksConfig.jshintInitTasksConfig( appConfig ),
            //
            // // Add injection annotations
            ngAnnotate: tasksConfig.ngannotateInitTasksConfig( appConfig ),
            //
            // // Copy existing files to 'build'
            copy: tasksConfig.copyInitTasksConfig( appConfig ),

            // Compile jade files
            jade: tasksConfig.jadeInitTasksConfig( appConfig ),

            // Caches the jade templates into scripts
            html2js: tasksConfig.html2jsInitTasksConfig( appConfig ),

            // Compile sass files
            sass: tasksConfig.sassInitTasksConfig( appConfig ),

            // Minify css
            cssmin: tasksConfig.cssminInitTaskConfig( appConfig ),

            // Concat
            concat: concatenateCustomFiles( ),

            // Ugligy js
            uglify: uglify( ),

            // Inject all dependencies
            // injector: tasksConfig.injectorInitTasksConfig( appConfig ),

            // Star up a node express server
            express: tasksConfig.expressInitTasksConfig( appConfig ),

            // Bind the express server
            connect: tasksConfig.connectInitTasksConfig( appConfig ),

            // Watch for changes on files
            watch: watchSassCustom(),

            // Bind the express server
            browserSync: server( )
        });

        // Server Tasks
        grunt.registerTask('server', [
            'clean',
            'jshint',
            'ngAnnotate',
            'copy',
            'jade',
            'html2js',
            'sass',
            'cssmin',
            'concat',
            'uglify',
            // 'injector',
            // 'express',
            // 'connect:server',
            'browserSync',
            'watch'
        ]);

        grunt.registerTask ( 'make', [
            'clean',
            'jshint',
            'ngAnnotate',
            'copy',
            'jade',
            'html2js',
            'sass',
            'cssmin',
            'concat',
            'uglify',
            // 'injector'
        ] );

        // By default
        grunt.registerTask('default', ['server']);

    };
}());
