/*jshint node:true*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: '<json:package.json>'
  , istatic: {
      testapp: {
        repos: {
          'ded/bonzo': {
            file: {
              '/bonzo.js': '/public/js/lib/'
            }
          }
        , 'dexteryy/OzJS': {
            tag: '2.5.1'
          , file: {
              '/oz.js': '/public/js/lib/'
          }
        }
        }
      }
    }
  })

  grunt.loadTasks('tasks')
  grunt.registerTask('default', 'istatic:testapp')
}
