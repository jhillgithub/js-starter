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
            js: {
                options: {
                    separator: '',
                    banner: '/* {{cookiecutter.repo_name}} version ' + _pkg.version + ' (' + _pkg.homepage + ') */\n' + '(function(){\n',
                    footer: '\n\{{cookiecutter.repo_name}}.version = "' + _pkg.version + '";\n\nwindow.{{cookiecutter.repo_name}} = {{cookiecutter.repo_name}};\n\n})();'
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('production', ['concat', 'uglify', 'replace']);
    grunt.registerTask('release', ['production']);
    grunt.registerTask('lint', ['jshint']);
};