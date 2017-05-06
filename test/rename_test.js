'use strict';

var grunt = require('grunt');

exports.clean = {

  rename_file_test: function(test) {
    test.expect(1);
    var expected = grunt.file.exists('tmp/test/fixtures/file-renamed.txt');
    test.equal(expected, true, 'File Should be Renamed');
    test.done();
  },

  rename_folder_test: function(test) {
    test.expect(1);
    var expected = grunt.file.exists('tmp//test/fixtures/folder-renamed');
    test.equal(expected, true, 'Folder Should be Renamed');
    test.done();
  },
  /*
  rename_folder_with_subfolders_test: function(test) {
    test.expect(1);
	var expected = grunt.file.exists('tmp//test/fixtures/folder-with-subdir-renamed');
	test.equal(expected, true, 'Parent Folder Should be Renamed');
	test.done();
  },
  
  rename_child_folder: function(test) {
	test.expect(1);
    var expected = grunt.file.exists('tmp//test/fixtures/folder-test-subdir-rename/subdir-renamed');
	test.equal(expected, true, 'Child Folder Should be Renamed');
	test.done();
  },  
*/
};
