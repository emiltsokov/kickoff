module.exports.tasks = {

	/**
	* Watch
	* https://github.com/gruntjs/grunt-contrib-watch
	* Watches your scss, js etc for changes and compiles them
	*/
	watch: {
		scss: {
			files: ['scss/**/*.scss', '!scss/styleguide.scss'],
			tasks: [
				'sass:kickoff',
				'autoprefixer:kickoff'
			]
		},

		styleguide_scss: {
			files: ['scss/styleguide.scss'],
			tasks: [
				'sass:styleguide',
				'autoprefixer:styleguide'
			]
		},

		js: {
			files: ['<%=config.js.fileList%>', 'Gruntfile.js'],
			tasks: ['uglify']
		},

		livereload: {
			options: { livereload: true },
			files: [
				'<%=config.jekyll.buildDirectory%>/css/*.css'
			]
		},

		grunticon : {
			files: ['img/src/*.svg', 'img/src/*.png'],
			tasks: [
				'clean:icons',
				'svgmin',
				'grunticon'
			]
		},

		// text: {
		// 	files: [
		// 		'**/*.md'
		// 	],
		// 	tasks: ['jekyll']
		// },

		// img: {
		// 	files: [
		// 		'img/**/*'
		// 	],
		// 	tasks : 'copy:assets'
		// },

		// fix watch process
		jekyll : {
			files: [
				'_includes/**/*.html',
				'_layouts/**/*.html',
				'archive/**/*.html',
				'_posts/**/*.md',
				'demos/**/*.md',
				'docs/**/*.md',
				'code/**/*.html',
				'_drafts/**/*.md',
				'css/**/*.css',
				'js/**/*.js',
				'img/**/*.*',
				'*.html',
				'*.md',
				'_plugins/*.rb',
				'Gruntfile.js',
				'config/*.js',
				'**/*.yml'
			],
			tasks: 'jekyll',
			options: {
				livereload: true
			}
		}
	}
};
