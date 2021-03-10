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
                outputStyle: 'nested', 
                sourceMap: false
            },
            build: {
                files: {
                    'public/css/style.css': 'src/sass/style.scss'
                }
            }
        },
        postcss: {
            options: {
              map: false,
              processors: [
                require('pixrem')(),
                require('autoprefixer')()
              ]
            },
            user: {
                src: 'public/css/style.css'
            }
        },

        babel: {
            options: {
              sourceMap: false,
              presets: ['@babel/preset-env', '@babel/preset-react']
            },
            build: {
              files: {
                'public/js/script.js': 'public/js/script.js'
              }
            }
        },
        concat: {
            options: {
                separator: '\n;\n'
            },
            app: {
                src: [
                    'src/js/components/*',
                    'src/js/index.js'
                ],
                dest: 'public/js/script.js'
            }
        },
        uglify:{
            options: {
                mangle: false,
                compress: false,
                beautify: true
            },
            app: {
                src: 'public/js/script.js',
                dest: 'public/js/script.js'
            }
        }
    });

    grunt.registerTask('bjs', ['concat', 'babel', 'uglify']);
    grunt.registerTask('bcss', ['sass', 'postcss']);
    grunt.registerTask('build', ['bcss', 'bjs']);

}