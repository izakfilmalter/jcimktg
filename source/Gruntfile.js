'use strict';
module.exports = function(grunt) {

    grunt.initConfig({

        // Converts Sass files to CSS
        sass: {
            dist: {
                options: {
                    style: 'compact',
                    sourcemap: 'auto',
                    banner: '/* CSS Developed by JCI Marketing. Contact info@jcimarketing.com for more information. */'
                },
                files: {
                    '../template/styles/custom.css': 'source_files/main.scss'
                }
            }
        },

        // uglifies any JS file
        uglify: {
            dev: {
                files: {
                    '../template/scripts/custom.js': 'source_files/main.js'
                }
            }
        },

        // git add -A
        gitadd: {
            task: {
                options: {
                    force: true,
                    all: true,
                    cwd: '../template/'
                }
            }
        },

        // git commit -m "Repository updated on <current date time>"
        gitcommit: {
            task: {
                options: {
                    message: 'Repository updated on ' + grunt.template.today('yyyy-mm-dd'),
                    allowEmpty: true,
                    cwd: '../template/'
                }
            }
        },

        // git push origin master
        gitpush: {
            task: {
                options: {
                    remote: 'origin',
                    branch: 'master',
                    cwd: '../template/'
                }
            }
        },

        // watches for changes to source files and runs related task on change
        watch: {
            styles: {
                files: [
                    'source_files/*.scss',
                    'source_files/*.css'
                ],
                tasks: ['sass']
            },

            scripts: {
                files: [
                    'source_files/*.js'
                ],
                tasks: ['uglify']
            },

            gitadd: {
                files: [
                    'source_files/*.css',
                    'source_files/*.js'
                ],
                tasks: ['gitadd']
            },

            gitcommit: {
                files: [
                    'source_files/*.css',
                    'source_files/*.js'
                ],
                tasks: ['gitcommit']
            },

            gitpush: {
                files: [
                    'source_files/*.css',
                    'source_files/*.js'
                ],
                tasks: ['gitpush']
            },
        }
    });

    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('default', ['watch']);

};