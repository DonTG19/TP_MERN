const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-babel');


    grunt.initConfig({
        sass:{
            options: {
                implementation: sass,
                outputStyle: 'compressed', 
                sourceMap: false
            },
            build: {
                files: {}
            }
        },
        postcss: {
            options: {
              map: false,
              processors: [
                require('pixrem')(),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            },
            user: {}
        },

        babel: {
            options: {
              sourceMap: false,
              presets: ['@babel/preset-env']
            },
            build: {
              files: {}
            }
        },
        concat: {
            options: {
                separator: ';'
            }
        },
        uglify:{}
    });

    grunt.registerTask('build_js', ['concat', 'babel', 'uglify']);
    grunt.registerTask('build_css', ['sass', 'postcss']);
    grunt.registerTask('build', ['build_css', 'build_js']);

}