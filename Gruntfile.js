(function () {
    'use strict';

    module.exports = function(grunt) {

        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);

        function toCamelCase ( input ) {
            return input.replace( /-([a-z])/g, function ( g ) {
                return g[1].toUpperCase();
            } );
        }


        function arrayToCamelCase ( array ) {
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                newArray.push( toCamelCase(array[i]) );
            }
            return newArray;
        }


        function server ( ) {
            var serverConfig = {
                bsFiles: {
                    src : [
                        'build/**/*.css',
                        'build/**/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./build",
                        index: "admin-users/views/layout/layout.html"
                    }
                }
            };

            return serverConfig;
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
            concat: tasksConfig.concatInitTaskConfig( appConfig ),

            // Ugligy js
            uglify: tasksConfig.uglifyInitTaskConfig( appConfig ),

            // Inject all dependencies
            // injector: tasksConfig.injectorInitTasksConfig( appConfig ),

            // Star up a node express server
            express: tasksConfig.expressInitTasksConfig( appConfig ),

            // Bind the express server
            connect: tasksConfig.connectInitTasksConfig( appConfig ),

            // Watch for changes on files
            watch: tasksConfig.watchTasksInitConfig( appConfig ),

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
