/*
 * grunt-contrib-rename
 * https://github.com/jasonlam604/grunt-contrib-rename
 *
 * Copyright (c) 2013 Jason Lam, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },
    
    clean: ["tmp"],  
	
	rename: {
		main: {
			files: [
				{src: ['tmp/file-original.txt'], dest: 'tmp/index-test-rename.html'},
			]
		}
	},

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Setup a test helper to create some folders to clean.
  grunt.registerTask('copy', 'Copy fixtures to a temp location.', function() {
    grunt.file.copy('test/fixtures/file-original.txt', 'tmp/file-original.txt');
  });

  // Whenever the 'test' task is run, first create some files to be cleaned,
  // then run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'rename', 'nodeunit']);
   
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
