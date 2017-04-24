/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 3200,
            quality: 30
          },{
            width: 2400,
            quality: 30
          },{
            width: 2000,
            quality: 30
          },{
            width: 1800,
            quality: 30
          },{
            width: 1600,
            quality: 30
          },{
            width: 1400,
            quality: 30
          },{
            width: 1200,
            quality: 30
          },{
            width: 1000,
            quality: 30
          },{
            width: 900,
            quality: 30
          },{
            width: 800,
            quality: 30
          },{
            width: 700,
            quality: 30
          },{
            width: 600,
            quality: 30
          },{
            width: 500,
            quality: 30
          },{
            width: 400,
            quality: 30
          },{
            width: 300,
            quality: 30
          },{
            width: 200,
            quality: 30
          },{
            width: 100,
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
