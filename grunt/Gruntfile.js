module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      //
      dev: ['./Gruntfile.js'],
      prod: ['./**/*.js']
    },
    watch: {
      dev: {
        files: ['./Gruntfile.js'],
        tasks: ['jshint:dev']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('default', 'A default tast', function() {
  //   console.log('Hello World');
  // });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('prod', ['jshint:prod']);

};
