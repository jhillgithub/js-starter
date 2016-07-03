/*
 * Gruntfile for {{cookiecutter.repo_name}}.
 *
 * @author <{{cookiecutter.email}}>
 * ----------------------------------------------- */

module.exports = function(grunt) {
    
    var _pkg = grunt.file.readJSON('bower.json');
    grunt.initConfig({
        pkg: _pkg,
        concat: {
            css: {
                options: {
                    separator: '\n',
                    banner: '/* {{cookiecutter.repo_name}} version ' + _pkg.version + ' (' + _pkg.homepage + ') */\n'
                },
                src: [
                    'src/css/*.css'
                ],
                dest: 'dist/{{cookiecutter.repo_name}}.css'
            },
            js: {
                options: {
                    separator: '',
                    banner: '/* {{cookiecutter.repo_name}} version ' + _pkg.version + ' (' + _pkg.homepage + ') */\n' + '(function(){\n',
                    footer: '\n\{{cookiecutter.repo_name}}.version = "' + _pkg.version + '";\n\nwindow.quorra = quorra;\n\n})();'
                },
                src: [
                    'src/{{cookiecutter.repo_name}}.js'
                ],
                dest: 'dist/{{cookiecutter.repo_name}}.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/{{cookiecutter.repo_name}}.min.js': ['dist/{{cookiecutter.repo_name}}.js']
                }
            }
        },
        jshint: {
            foo: {
                src: "src/**/*.js"
            },
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            js: {
                files: ["src/**/*.js"],
                tasks: ['concat']
            }
        },
        copy: {
          css: {
            files: [
              { src: 'src/{{cookiecutter.repo_name}}.css', dest: 'dist/{{cookiecutter.repo_name}}.css' }
            ]
          }
        },
        cssmin: {
          dist: {
            files: {
                'dist/{{cookiecutter.repo_name}}.min.css' : ['dist/{{cookiecutter.repo_name}}.css']
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['concat','copy', 'uglify']);
    grunt.registerTask('production', ['concat', 'uglify', 'copy', 'cssmin', 'replace']);
    grunt.registerTask('release', ['production']);
    grunt.registerTask('lint', ['jshint']);
};