---
layout: docs
navgroup: docs
title: The JavaScript
---

Information about the default JavaScript included in the project.

## script.js

This file can be used to contain or reference your site/app JavaScript code. For larger projects, you can make use of a JavaScript module loader, like [Require.js](http://requirejs.org/), to load any other scripts you need to run.

By default, there is a `TMW` namespace, this can be changed to anything, perhaps the name of the project. We tend to use the [singleton pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript).

## Libraries

If you need to add any 3rd party library code, we suggest placing them in the [js/libs/](https://github.com/tmwagency/kickoff/tree/master/js/libs) folder. The latest jQuery and Modernizr libraries are included by default. You may wish to create your own [custom Modernizr build](http://www.modernizr.com/download/). Other recommended libraries include:

## Polyfills

On most web projects, we use Modernizr, when that's not the case you might want to use the HTML5Shiv, it is located in [js/libs/polyfills](https://github.com/tmwagency/kickoff/tree/master/js/libs/polyfills)

* `html5shiv` for enabling HTML5 elements
* `html5printshiv` the same as above but adds support for printing HTML5 elements

## Plugins

Kickoff includes a few commonly used plugins. They are located in the [js/libs/plugins](https://github.com/tmwagency/kickoff/tree/master/js/libs/plugins) directory.

* [jQuery Easie](http://janne.aukia.com/easie/) Easing library for js animations
* [imagesLoaded](https://github.com/desandro/imagesloaded) A useful plugin for making sure images are loaded before another event happens. Very useful for carousels
* [Validatr](http://jaymorrow.github.com/validatr/) A simple client-side form validation script
