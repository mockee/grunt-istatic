/*jshint node:true*/
module.exports = function(grunt) {
  var istatic = require('node-istatic')
  var DESC = 'Unified management of static files.'

  grunt.registerMultiTask('istatic', DESC, function() {
    grunt.helper('istatic', this.data, this.async())
  })

  grunt.registerHelper('istatic', function(config, cb) {
    istatic.pull(config)
  })
}
