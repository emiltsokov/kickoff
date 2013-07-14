---
layout: docs
navgroup: docs
title: Usage
---

Kickoff is not meant to be too prescriptive; we don't want to force developers into a certain coding style. At it's heart lies the CSS framework (built with the `.scss` version of Sass) so, if you wanted to, you could just include that.

We have included a


Once you have cloned or downloaded Kickoff, creating a site or app usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks.
4. (Optionally run a Grunt build script to automate the optimization of your site
5. Deploy your site.


## Basic file structure

A basic Kickoff site initially looks something like this:

	├── css
	│   ├── kickoff.css
	├── img
	│   └── ui
	├── js
	│   ├── script.js
	│   ├── plugins.js
	│   ├── mobile-plugins.js
	│   └── libs
	│       ├── [...]
	│       ├── plugins
	│       │   ├── jquery.easie.min.js
	│       │   ├── jquery.imagesLoaded.min.js
	│       │   └── jquery.validatr.min.js
	│       └── polyfills
	│           ├── html5printshiv.js
	│           ├── html5shiv.js
	├── scss
	│   ├── app.scss
	│   ├── buttons.scss
	│   ├── choreographic-grid.scss
	│   ├── forms.scss
	│   ├── kickoff.scss
	│   ├── mixins.scss
	│   ├── normalize.scss
	│   ├── print.scss
	│   ├── typography.scss
	│   ├── variables.scss
	│   ├── wells.scss
	│   └── [...]
	├── .htaccess
	├── 404.html
	├── index.html
	├── humans.txt
	├── robots.txt
	├── favicon.ico
	└── [apple-touch-icons]

What follows is a general overview of each major part and how to use them.

### CSS

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.html).

### Javascript

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.html).

### HTML


### .htaccess

The default web server config is for Apache. [About the .htaccess](htaccess.html).

Host your site on a server other than Apache? You're likely to find the corresponding configuration file in our [server configs repo](https://github.com/h5bp/server-configs). If you cannot find a configuration file for your setup, please consider contributing one so that others can benefit too.

### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### robots.txt

Edit this file to include any pages you need hidden from search engines.
