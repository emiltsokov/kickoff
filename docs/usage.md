---
layout: docs
navgroup: docs
title: Usage
---

Kickoff is not meant to be too prescriptive; we don't want to force developers into a certain coding style. At it's heart lies the CSS framework (built with the `.scss` version of Sass) so, if you wanted to, you could just include that.


Once you have cloned or downloaded Kickoff, creating a site or app usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks.
4. Optionally run a Grunt build script to automate the optimization of your site
5. Deploy your site.


## Basic file structure

A basic Kickoff site initially looks something like this:

	├── css
	│   ├── kickoff.css
	│   └── kickoff-old-ie.css
	├── img
	│   └── ui
	├── js
	│   ├── script.js
	│   ├── helpers
	│   │   ├── console.js
	│   │   ├── cookies.js
	│   │   └── helpers.js
	│   ├── dist
	│   │   └── app.min.js
	│   └── libs
	│       ├── attach.js
	│       ├── jquery.2.min.js
	│       ├── jquery.min.js
	│       ├── modernizr.min.js
	│       ├── mobile
	│       │   ├── fastclick.js
	│       │   ├── normalized.addressbar.js
	│       │   └── orientation.change.js
	│       ├── plugins
	│       │   ├── jquery.easie.min.js
	│       │   ├── jquery.imagesLoaded.min.js
	│       │   └── jquery.validatr.min.js
	│       └── polyfills
	│           ├── html5printshiv.js
	│           └── html5shiv.js
	├── scss
	│   ├── functions
	│   │   └── [...]
	│   ├── helpers
	│   │   └── [...]
	│   ├── mixins
	│   │   ├── _css3.scss
	│   │   ├── _keyframes.scss
	│   │   ├── _animation.scss
	│   │   ├── _responsive.scss
	│   │   └── [...]
	│   ├── _app.scss
	│   ├── _buttons.scss
	│   ├── _choreographic-grid.scss
	│   ├── _colour-palette.scss
	│   ├── _components.scss
	│   ├── _dependencies.scss
	│   ├── _forms.scss
	│   ├── _mobile.scss
	│   ├── _normalize.scss
	│   ├── _print.scss
	│   ├── _responsive-utilities.scss
	│   ├── _tables.scss
	│   ├── _typography.scss
	│   ├── _utilities.scss
	│   ├── _variables.scss
	│   ├── kickoff.scss
	│   ├── kickoff-old-ie.scss
	│   └── [...]
	├── .editorconfig
	├── .htaccess
	├── .jshintrc
	├── 404.html
	├── Gruntfile.js
	├── package.json
	├── index.html
	├── humans.txt
	└── robots.txt

What follows is a general overview of each major part and how to use them.

### CSS

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.html).

### Javascript

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.html).

## CSS Class naming scheme
Kickoff uses a bespoke naming scheme for classnames.

	-        child element
	           e.g. .form-controlGroup > .form-controlGroup-label

	--       modifier element
	           e.g. .btn.btn--primary

	.is-     element state
	           e.g. .is-active

	aB       camel-case descriptors
	           e.g. .form-controlGroup
