module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: ['app/**/*js'],
        dest: 'js/app.js'
      }
    },
    jshint: {
      dev: ['app/**/*js']
    },
    uglify: {
      dev: {
        files: {
          'js/app.js': ['js/app.js']
        }
      }
    },
    watch: {
      dev: {
        files: ['app/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify']
      }
    },
    connect: {
      server: {
        options: {
          port: 9001
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  
  grunt.registerTask('default', ['watch'])
  grunt.registerTask('server', ['connect', 'watch'])
}