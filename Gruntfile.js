module.exports = function (grunt) {

	'use strict';

	// ====================
	// == Edit this section
	var
		jsFileList = [
			'js/libs/plugins/skeleton.tabs.js',
			'js/script.js'
		],
		distDir = 'js/dist/',
		jsFile = 'app.min.js',
		jekyllBuildDir = 'kickoff'
	;

	// ====================
	// ====================

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		jshint: {
			all: jsFileList,
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Choose Sass files below
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/kickoff.css': 'scss/kickoff.scss',
					'css/kickoff-old-ie.css': 'scss/kickoff-old-ie.scss'
				}
			},
			deploy: {
				options: {
					style: 'compressed',
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/kickoff.css': 'scss/kickoff.scss',
					'css/kickoff-old-ie.css': 'scss/kickoff-old-ie.scss'
				}

			},
			styleguide: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/styleguide.css': 'scss/styleguide.scss'
				}
			}
		},

		uglify: {
			options: {
				// mangle: Turn on or off mangling
				mangle: true,

				// beautify: beautify your code for debugging/troubleshooting purposes
				beautify: false,

				// report: Show file size report
				report: 'gzip',

				// sourceMap: @string. The location of the source map, relative to the project
				sourceMap: jsFile + '.map',

				// sourceMappingURL: @string. The string that is printed to the final file
				sourceMappingURL: '../../'+ jsFile +'.map'

			},
			js: {
				src: jsFileList,
				dest: distDir + jsFile
			}
		},

		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:deploy', 'sass:styleguide', 'copy:css']
			},

			js: {
				files: [
					'Gruntfile.js',
					'js/*.js',
					'js/libs/**/*.js'
				],
				tasks: ['uglify', 'copy:js']
			},

			text: {
				files: [
					'**/*.md',
					'**/*.html',
					'*.html'
				],
				tasks: ['jekyll']
			},

			img: {
				files: [
					'img/*.jpeg',
					'img/*.gif',
					'img/*.png',
					'fonts/*.*'
				],
				tasks : 'copy:assets'
			},

			// copy: {
			// 	files : [
			// 		'css/*.css',
			// 		'**/*.md',
			// 		'**/*.html'
			// 	],
			// 	tasks: ['copy']
			// },

			livereload: {
				options: { livereload: true },
				files: [
					jekyllBuildDir + '/css/*.css'
				]
			}
		},

		jekyll : {
			src: '',
			dest: jekyllBuildDir
		},


		/**
		 * Connect
		 * https://github.com/gruntjs/grunt-contrib-connect
		 * Start a static web server
		 */
		connect: {
			server: {
				options: {
					// port: 9001,
					open: true,
					livereload: true,
					base: './'
				}
			}
		},

		copy: {
			dist: {
				files: [
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'kickoff/img' },
					{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'kickoff/css' },
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'kickoff/js' }
				]
			},
			assets : {
				files: [
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'kickoff/img' },
					{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'kickoff/fonts' }
				]
			},
			css : {
				files: {
					// Copy the sass-generated style file to
					// the kickoff/ folder
					'kickoff/css/kickoff.css': 'css/kickoff.css',
					'kickoff/css/kickoff-old-ie.css': 'css/kickoff-old-ie.css',
					'kickoff/css/styleguide.css': 'css/styleguide.css'
				}
			},
			js: {
				files: [
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'kickoff/js' }
				]
			}
		},
	});

	// Load all the grunt tasks
	require('load-grunt-tasks')(grunt);

	// =============
	// === Tasks ===
	// =============
	// A task for development
	grunt.registerTask('dev', ['jshint', 'uglify', 'sass:dev']);

	// A task for deployment
	grunt.registerTask('deploy', ['jshint', 'clean', 'modernizr', 'uglify', 'sass:deploy']);

	// Default task
	grunt.registerTask('default', ['jshint', 'uglify', 'sass:dev']);

	/**
	 * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask("serve", ["jekyll", "connect", "watch"]);

};
