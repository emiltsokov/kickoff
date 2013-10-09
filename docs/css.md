---
layout: docs
navgroup: docs
title: CSS
---

The Kickoff starting CSS includes:

* [Normalize.css](https://github.com/necolas/normalize.css) - a great CSS reset
* Useful Kickoff defaults
* Common helpers
* Placeholder media queries
* Print styles
* A solid Sass framework for building sites or apps of all types


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


## Normalize.css

Normalize.css is a modern, HTML5-ready alternative to CSS resets. It contains
extensive inline documentation. Please refer to the [Normalize.css
project](http://necolas.github.com/normalize.css/) for more information.

## Kickoff defaults

This project includes a handful of base styles that build upon Normalize.css.
These include:

* Basic typography settings to provide improved text readability by default.
* Protection against unwanted `text-shadow` during text highlighting.
* Tweaks to default image alignment, fieldsets, and textareas.

You are free to modify or add to these base styles as your project requires.


## Media Queries



## Print styles

* Print styles are inlined to [reduce the number of page requests](http://www.phpied.com/delay-loading-your-print-css/).
* We strip all background colors and change the font color to dark gray and remove text-shadow. This is meant to help save printer ink.
* Anchors do not need colors to indicate they are linked. They are underlined to indicate so.
* Anchors and Abbreviations are expanded to indicate where users reading the printed page can refer to.
* But we do not want to show link text for image replaced elements (given that they are primarily images).

### Paged media styles

* Paged media is supported only in a [few browsers](http://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Cascading_Style_Sheets%29#Grammar_and_rules).
* Paged media support means browsers would know how to interpret instructions on breaking content into pages and on orphans/widows.
* We use `page-break-inside: avoid;` to prevent an image and table row from being split into two different pages, so use the same `page-break-inside:
  avoid;` for that as well.
* Headings should always appear with the text they are titles for. So, we ensure headings never appear in a different page than the text they describe
  by using `page-break-after: avoid;`.
* We also apply a default margin for the page specified in `cm`.
* We do not want [orphans and widows](http://en.wikipedia.org/wiki/Widows_and_orphans) to appear on pages you print. So, by defining `orphans: 3` and `widows: 3` you define the minimal  number of words that every line should contain.
