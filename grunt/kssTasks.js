module.exports = function(grunt){
  grunt.config('kss', {
    options: {
      verbose: true,
      // css paths are relative to the generated styleguide
      css: '../css/styles.css'
    },
    dist: {
      // src files are relative to Gruntfile
      src: 'scss/',
      dest: 'myStylgeuide/'
    }
  }) // config
  grunt.loadNpmTasks('grunt-kss');
  grunt.registerTask('generateStyleguide', 'kss');
}
