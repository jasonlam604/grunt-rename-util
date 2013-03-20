'use strict';

var grunt = require('grunt');

exports.clean = {

  renametest: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('tmp/file-original.txt');
    test.equal(expected, false, 'should rename file using rename');

    test.done();
  },
  
};
