/*jshint node:true*/
module.exports = function(grunt) {
  var istatic = require('node-istatic')
  var DESC = 'Unified management of static files.'

  grunt.registerMultiTask('istatic', DESC, function() {
    istatic.pull(this.data, this.async())
  })
}
