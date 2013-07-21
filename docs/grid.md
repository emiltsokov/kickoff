---
layout: docs
navgroup: docs
title: The Choreographic Grid
prettyprint: true
---

The Choreographic Grid is a simple, but fully responsive, grid framework developed by <a href="http://github.com/mrmartineau/">Zander Martineau</a>. The grid system uses percents instead of pixels for column widths. It has the same responsive capabilities as our fixed grid system, ensuring proper proportions for key screen resolutions and devices.

### Basic grid HTML
For a simple two column layout, create a `.row` and add the appropriate number of `.span*` columns. As this is a 12-column grid, each `.span*` spans a number of those 12 columns, and should always add up to 12 for each row (or the number of columns in the parent).

Please see a demo of this technique [here](../demos/grids.html#standard)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="span5 col">
		...
	&lt;/div>
	&lt;div class="span7 col">
		...
	&lt;/div>
&lt;/div></code></pre>

### Nesting columns
To nest your content with the default grid, add a new `.row` and set of `.span*` columns within an existing `.span*` column. Nested rows should include a set of columns that add up to the number of columns of its parent.

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="span4 col">
		...
	&lt;/div>
	&lt;div class="span7 col">
		...
		<b>&lt;div class="row">
			&lt;div class="span4 col">
				...
			&lt;/div>
			&lt;div class="span7 col">
				...
			&lt;/div>
		&lt;/div></b>
	&lt;/div>
&lt;/div></code></pre>

### Split columns
For wider viewports, larger columns can be **split** in two, then on narrower viewports we can unsplit them so that they stack on top of one-another. This happens before the entire grid breaks to the 'mobile' layout; this is unusual because no other CSS grid frameworks do this.

Please see a demo of this technique [here](../demos/grids.html#split)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row <b>split</b>">
	&lt;div class="col span4">
		...
	&lt;/div>
	&lt;div class="col span8">
		...
	&lt;/div>
&lt;/div></code></pre>

### Shunt columns
For wider viewports, allow smaller columns to site beside other column but on smaller screens **shunt** them down below their siblings. Shunt columns rely on named media queries within your code; the reason for this is so that unshunted columns can be resized when the shunt occurs. Using Sass and media-query names, we generate classes that resize these columns, for example `.mq-alpha-resize-to6` and `.mq-beta-resize-to2`.

Please see a demo of this technique [here](../demos/grids.html#shunt)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="col span4 <b>mq-alpha-resize-to6</b>">
		...
	&lt;/div>
	&lt;div class="col span4 <b>mq-alpha-resize-to6 mq-alpha-end mq-beta-resize-to2</b>">
		...
	&lt;/div>
	&lt;div class="col span4 <b>shunt</b>">
		...
	&lt;/div>
&lt;/div></code></pre>


### Offset columns
Move columns to the right using `.offset*` classes. Each class increases the left margin of a column by a whole column. For example, `.offset4` moves `.span4` over four columns.

Please see a demo of this technique [here](../demos/grids.html#offset)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="span3 col">
		...
	&lt;/div>
	&lt;div class="span7 <b>offset2</b> col">
		...
	&lt;/div>
&lt;/div></code></pre>


### Source Ordered columns
By utilizing the `.push*` and `.pull*` classes, elements can be rearranged, independent of the order in which they appear in the markup. This allows you to keep more pertinent info higher in the HTML, without sacrificing precision in your page layout.

Please see a demo of this technique [here](../demos/grids.html#source-ordering)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="col span2 <b>push10</b>">
		1st column in source, 2nd when viewed
	&lt;/div>
	&lt;div class="col span10 <b>pull2</b>">
		2nd column in source, 1st when viewed
	&lt;/div>
&lt;/div></code></pre>


### Centred columns
Centred columns columns can only appear by themselves in a row. Add a `.centred` class to any `.col` element.

Please see a demo of this technique [here](../demos/grids.html#centred)

<pre class="prettyprint lang-html linenums"><code>&lt;div class="row">
	&lt;div class="span3 col <b>centred</b>">
		...
	&lt;/div>
&lt;/div></code></pre>