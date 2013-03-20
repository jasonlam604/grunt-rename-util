/*
 * grunt-contrib-rename (unofficial)
 * https://github.com/jasonlam604/grunt-contrib-rename
 *
 * Copyright (c) 2013 Jason Lam
 * Licensed under the MIT license.
 * https://github.com/jasonlam604/grunt-contrib-rename/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

  grunt.registerMultiTask('rename', 'Rename file', function() {

    var options = this.options({
      force: false
    });

    grunt.verbose.writeflags(options, 'Options');
	
    this.files.forEach(function(filePair) {
	
      filePair.src.forEach(function(src) {
	  
		if (!grunt.file.exists(String(filePair.src))) {
          grunt.log.warn('Cannot rename non-existent file.');
		} else {
			if(filePair.src !== filePair.dest) {
				try {
					grunt.log.writeln('Renaming ' + filePair.src + ' -> ' + filePair.dest);
					grunt.file.copy(filePair.src, filePair.dest, options);
					grunt.file.delete(filePair.src, options);
				} catch (e) {
					grunt.log.error();
					grunt.verbose.error(e);
					grunt.fail.warn('Rename operation failed.');
				}
			} else {
				grunt.log.warn('No renaming ' + filePair.src + ', same file name');
			}
		}
		
      });
    });
  });
};