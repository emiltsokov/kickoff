---
layout: docs
title: Principles
subtitle:
navgroup: docs
navactive: docsindex
---
Kickoff is a lightweight front-end framework for creating scalable, responsive sites; that might sound a bit vague but it is the essence of the framework. Due to the nature of agency work, the projects are hugely varied, but as developers, we always try to cut corners to normalise things as much as possible – basically because we're lazy and we don't want to have to repeat things very often! Kickoff aims to mitigate common problems found in web development by providing a strong starting point and a set of helpful defaults for use on almost any project.

The key difference of Kickoff when compared with other similar frameworks – I'm looking at you Bootstrap and Foundation – is that it is not nearly as prescriptive. While those frameworks define almost every aspect of a website with CSS styles and JavaScript plugins that do everything, Kickoff has most of that but does not enable it by default. For example, we have a simple grid system, but if you need something more complex or, heaven forbid, not use one, that is not a problem; just don't include it.

### Get Kickoff

Find out how to start using Kickoff on the [getting started page](get.html).

### Grunt
Find out how Kickoff uses Grunt on the [grunt](grunt.html) page.

### CSS naming scheme
Kickoff uses a bespoke naming scheme for classnames.

```scss
/* Descriptors use camel-casing if more than one word: e.g. twoWords */
.skipToContent {
  ...
}

/* ========= */

/* Child elements use single hyphens: - */
.form-controlGroup {
  ...
}

/* ========= */

/* Modifier element use a double hyphen: -- */
.btn.btn--primary {
  ...
}

/* ========= */

/* Element state: .is- */
.is-active {
  ...
}

/* ========= */

/* Sass variables are dash-case */
a {
  color: $color-primary;
}
```


### Using Git?
Kickoff's [.gitignore](https://github.com/tmwagency/kickoff/blob/master/.gitignore#L28) file ignores the `/dist` folder and `.map` files by default. You will want to uncomment these lines if you are compiling these on the server; think continuous integration.


## Need more help?

* [Usage](usage.html) — Overview of the project contents.

### Presentation

* [Sass](sass.html) — A guide to the default Sass
* [The Choreographic Grid](grid.html) — A guide to the Kickoff's grid framework

### Behaviour

* [JavaScript](js.html) — A guide to the default JavaScript.
* [Grunt](grunt.html) — A guide to using [Grunt.js](http://gruntjs.com) with Kickoff

TMW uses their own styleguide for Javascript, please read it [here](https://github.com/tmwagency/TMW-frontend-guidelines/blob/master/Front-End%20development%20guidelines.mdown#section-6)
