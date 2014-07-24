---
layout: demo
body-class: show-grid
navgroup: demo
navactive: democomponents
title: Components
---

<h2>Default Buttons</h2>
<p>Button styles can be applied to anything with the <code>.btn</code> class applied. However, typically you'll want to apply these to only <code>&lt;a></code> and <code>&lt;button></code> elements for the best rendering.</p>

<h4>Button sizes</h4>
<p>Fancy larger or smaller buttons? Add <code>.btn--large</code>, or <code>.btn--small</code> for additional sizes.</p>

<div class="demo">
	<div class="demo-visual">
		<h3>Normal buttons</h3>
		<a href="#" class="btn">Anchor</a>
		<input type="submit" value="Input (submit)" class="btn" />
		<input type="submit" value="Disabled (submit)" class="btn" disabled />

		<h3>Larger buttons</h3>
		<a href="#" class="btn btn--large">Default colour</a>
		<a href="#" class="btn btn--large btn--primary">Primary</a>

		<h3>Small buttons</h3>
		<a href="#" class="btn btn--small">Anchor</a>
		<input type="submit" value="Primary" class="btn btn--primary btn--small" />
		<input type="submit" value="Disabled" class="btn btn--small" disabled />
		<button type="reset" class="btn btn--small">Reset</button>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Normal buttons with default colour -->
<a href="#" class="btn">Anchor</a>
<input type="submit" value="Input (submit)" class="btn" />
<input type="submit" value="Disabled (submit)" class="btn" disabled />

<!-- Larger buttons use the .btn--large modifier class -->
<a href="#" class="btn btn--large">Default colour</a>
<a href="#" class="btn btn--large btn--primary">Primary</a>

<!-- Small buttons use the .btn--small modifier class -->
<a href="#" class="btn btn--small">Anchor</a>
<input type="submit" value="Primary" class="btn btn--primary btn--small" />
<input type="submit" value="Disabled" class="btn btn--small" disabled />
<button type="reset" class="btn btn--small">Reset</button>
{% endhighlight %}
	</div>
</div>

<hr>

<h2>Pill Buttons</h2>
<p>Add the <code>.btn--pill</code> class to any <code>.btn</code>.</p>
<div class="demo">
	<div class="demo-visual">
		<h4>Pill buttons</h4>
		<a href="#" class="btn btn--pill btn--primary">Pill</a>
		<a href="#" class="btn btn--pill">This is a Pill</a>
		<h2>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a pill button </a> in a heading!</h2>

		<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Pill buttons use the .btn--pill modifier class -->
<a href="#" class="btn btn--pill btn--primary">Pill</a>
<a href="#" class="btn btn--pill">This is a Pill</a>

<h2>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a heading!</h2>

<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
{% endhighlight %}
	</div>
</div>

<hr>

<h2>Media Object</h2>
<p>Place any image- and text-like content side-by-side, as per: <a href="stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code">media object</a></p>
<div class="demo">
	<div class="demo-visual">
		<div class="media">
			<div class="media-img">
				<img src="http://placekitten.com/100/100">
			</div>
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
		<div class="media media--rev">
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="media-img">
				<img src="http://placekitten.com/100/200">
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Media element with left aligned image -->
<div class="media">
	<div class="media-img">
		<img src="http://placekitten.com/100/100">
	</div>
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
</div>

<!-- Media element with right aligned image -->
<div class="media media--rev">
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
	<div class="media-img">
		<img src="http://placekitten.com/100/200">
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr>

<h2>Tabs</h2>
<div class="demo">
	<div class="demo-visual">
		<!-- Default, left-aligned tabs -->
		<ul class="tabs">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Centre-aligned tabs -->
		<ul class="tabs tabs--alignCenter">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Right-aligned tabs -->
		<ul class="tabs tabs--alignRight">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Default, left-aligned tabs -->
<ul class="tabs">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Centre-aligned tabs -->
<ul class="tabs tabs--alignCenter">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Right-aligned tabs -->
<ul class="tabs tabs--alignRight">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>
{% endhighlight %}
	</div>
</div>

