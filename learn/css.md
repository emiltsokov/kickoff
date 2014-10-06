---
layout: docs
navgroup: docs
navactive: docscss
title: CSS
---

The Kickoff starting CSS includes:

* [Normalize.css](https://github.com/necolas/normalize.css) - a great CSS reset
* Useful Kickoff defaults
* Common helpers
* Placeholder media queries
* Print styles
* A solid Sass framework for building sites or apps of all types

## CSS naming scheme
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

## Kickoff defaults

This project includes a handful of base styles that build upon Normalize.css.
These include:

* Basic typography settings to provide improved text readability by default.
* Protection against unwanted `text-shadow` during text highlighting.
* Tweaks to default image alignment, fieldsets, and textareas.

You are free to modify or add to these base styles as your project requires.


## Media Queries
Media queries in Kickoff are typically handled with a [set of useful mixins](https://github.com/tmwagency/kickoff/blob/master/scss/mixins/_responsive.scss). These are used so that we can define separate media-query content for `< IE9` and browsers with support for media queries. These are directly related to the global `$fix-mqs` var defined in `kickoff-old-ie.scss`. `kickoff-old-ie.scss` ignores any content in media-queries with values less than the `$fix-mqs` var value.

* `respond-min` for `min-width` media queries
* `respond-max` for `max-width` media queries
* `respond-min-max` for `min-width` & `max-width` media queries

#### Media query example

```sass
/* This Sass mixin: */
@include respond-min(800) {
	a {
		color: darkgoldenrod;
	}
}
/* Is the same as: */
@media screen and (min-width: 800px) {
	a {
		color: darkgoldenrod;
	}
}
```


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
