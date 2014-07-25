---
layout: demo
body-class: show-grid
navgroup: demo
navactive: demoforms
title: Form styling
---
<h2>Forms <small>with labels above inputs</small></h2>
<p>Having forms styled like this depends on specific markup with specific class names. Please take the example code below as a guide.</p>

<div class="demo">
	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="g-row">
					<div class="form-controlGroup g-col g-span6">
						<label for="text" class="form-label">Text</label>
						<div class="form-controlGroup-inputWrapper">
							<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
						</div>
					</div>
					<div class="form-controlGroup g-col g-span6">
						<label for="email" class="form-label">Email</label>
						<div class="form-controlGroup-inputWrapper">
							<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
						</div>
					</div>
				</div>

				<div class="g-row">
					<div class="form-controlGroup g-col g-span4 form-controlGroup--success">
						<label for="text" class="form-label">Success</label>
						<div class="form-controlGroup-inputWrapper">
							<input type="text" id="text" placeholder="Zander Martineau" class="form-input" value="A value" required/>
						</div>
					</div>
					<div class="form-controlGroup g-col g-span4 form-controlGroup--error">
						<label for="email" class="form-label">Error</label>
						<div class="form-controlGroup-inputWrapper">
							<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" value="A value" required/>
						</div>
					</div>
					<div class="form-controlGroup g-col g-span4 form-controlGroup--warning">
						<label for="password" class="form-label">Warning</label>
						<div class="form-controlGroup-inputWrapper">
							<input type="password" id="password" placeholder="Your password" class="form-input" value="A value" />
						</div>
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="comments" class="form-label">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form action="#" class="form">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="g-row">
			<div class="form-controlGroup g-col g-span6">
				<label for="text" class="form-label">Text</label>
				<div class="form-controlGroup-inputWrapper">
					<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span6">
				<label for="email" class="form-label">Email</label>
				<div class="form-controlGroup-inputWrapper">
					<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
				</div>
			</div>
		</div>

		<div class="g-row">
			<div class="form-controlGroup g-col g-span4 form-controlGroup--success">
				<label for="text" class="form-label">Success</label>
				<div class="form-controlGroup-inputWrapper">
					<input type="text" id="text" placeholder="Zander Martineau" class="form-input" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4 form-controlGroup--error">
				<label for="email" class="form-label">Error</label>
				<div class="form-controlGroup-inputWrapper">
					<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4 form-controlGroup--warning">
				<label for="password" class="form-label">Warning</label>
				<div class="form-controlGroup-inputWrapper">
					<input type="password" id="password" placeholder="Your password" class="form-input" value="A value" />
				</div>
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="comments" class="form-label">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
			</div>
		</div>
	</fieldset>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<h2>Forms <small>with inline labels</small></h2>
<p>Assuming you use the same markup as above, all you have to do is simply add a <code>.form--horizontal</code> class to the <code>&lt;form></code> element &amp; you'll now have right aligned, inline form labels in an instant.</p>
<div class="demo">
	<div class="demo-visual">
		<form action="#" class="form form--horizontal">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label for="text" class="form-label">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="email" class="form-label">Email</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="password" class="form-label">Password</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="password" id="password" placeholder="Your password" class="form-input" />
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="comments" class="form-label">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
					</div>
				</div>
			</fieldset>
	</form>
	</div>
	<div class="demo-code">
{% highlight html%}
<form action="#" class="form form--horizontal">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label for="text" class="form-label">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="email" class="form-label">Email</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="password" class="form-label">Password</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="password" id="password" placeholder="Your password" class="form-input" />
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="comments" class="form-label">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
			</div>
		</div>
	</fieldset>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<h2>Inline Form</h2>
<p>This is a simplified form where everything is inline. It does not follow the same rules as the previous two examples but you will need to add a class of <code>.form--inline</code> to the <code>&lt;form></code> element so the inputs &amp; buttons play nicely.</p>
<div class="demo">
	<div class="demo-visual">
		<form class="form form--inline">
			<input type="email" class="input--medium" placeholder="Email">
			<input type="text" class="input--medium" placeholder="Username">
			<label class="checkbox">
				<input type="checkbox"> Remember me
			</label>
			<input type="submit" class="btn btn--primary" value="Sign in"/>
		</form>
	</div>
	<div class="demo-code">
{% highlight html%}
<form class="well form--inline">
	<input type="email" class="input--medium" placeholder="Email">
	<input type="text" class="input--medium" placeholder="Username">
	<label class="checkbox">
		<input type="checkbox"> Remember me
	</label>
	<input type="submit" class="btn btn--primary" value="Sign in"/>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<h2>All Form Elements</h2>
<p>All the form elements you could need.</p>
<div class="demo">
	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label for="text" class="form-label">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="email" class="form-label">Email</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="password" class="form-label">Password</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="password" id="password" placeholder="Your password" class="form-input" />
					</div>
				</div>

				<div class="form-controlGroup form-controlGroup--success">
					<label for="text" class="form-label">Text (Success)</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="text" id="text" placeholder="Zander Martineau" class="form-input" value="A value" required/>
					</div>
				</div>
				<div class="form-controlGroup form-controlGroup--error">
					<label for="email" class="form-label">Email (Error)</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" value="A value" required/>
					</div>
				</div>
				<div class="form-controlGroup form-controlGroup--warning">
					<label for="password" class="form-label">Password (Warning)</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="password" id="password" placeholder="Your password" class="form-input" value="A value" />
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="comments" class="form-label">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="text" class="form-label">Disabled Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="text" id="text" placeholder="Zander Martineau" class="form-input" disabled/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="file" class="form-label">File upload <br>
						<small>Firefox uses the <code>size</code> attribute to determine width.</small>
					</label>

					<div class="form-controlGroup-inputWrapper">
						<label class="form-input form-input--fileWrapper">
							<input type="file" id="file" accept="image/*" size="14" class="form-input-file" />
						</label>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="file" class="form-label">File upload (alt)<br>
						<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
					</label>

					<div class="form-controlGroup-inputWrapper">
						<label class="form-input form-input--fileWrapper--styled">
							<input type="file" id="file" accept="image/*" size="14" class="form-input-file" />
						</label>
					</div>
				</div>
				<div class="g-row">
					<div class="form-controlGroup g-span6 g-col">
						<label for="comments" class="form-label">Checkboxes</label>
						<div class="form-controlGroup-inputWrapper">
							<label class="control">
								<input type="checkbox" value="check1">
								This is a checkbox
							</label>
							<label class="control">
								<input type="checkbox" value="check2">
								This is a checkbox
							</label>
							<label class="control">
								<input type="checkbox" value="check3" disabled>
								This is a checkbox
							</label>
						</div>
					</div>

					<div class="form-controlGroup g-span6 g-col">
						<label for="comments" class="form-label">Radio buttons</label>
						<div class="form-controlGroup-inputWrapper">
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
								This is a radio
							</label>
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
								This is another radio
							</label>
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
								This is another radio
							</label>
						</div>
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="comments" class="form-label">Inline Checkboxes</label>
					<div class="form-controlGroup-inputWrapper">
						<label class="control control--inline">
							<input type="checkbox" value="check1">
							This is a checkbox
						</label>
						<label class="control control--inline">
							<input type="checkbox" value="check2">
							This is a checkbox
						</label>
						<label class="control control--inline">
							<input type="checkbox" value="check3" disabled>
							This is a checkbox
						</label>
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="comments" class="form-label">Inline radio buttons</label>
					<div class="form-controlGroup-inputWrapper">
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
							This is a radio
						</label>
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
							This is another radio
						</label>
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
							This is another radio
						</label>
					</div>
				</div>

				<div class="g-row">
					<div class="form-controlGroup g-col g-span6">
						<label for="choice" class="form-label">Choice</label>
						<div class="form-controlGroup-inputWrapper">
							<select id="choice" class="form-input form-input--select">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>
					<div class="form-controlGroup g-col g-span6">
						<label for="choice" class="form-label">Choice (mulitple)</label>
						<div class="form-controlGroup-inputWrapper">
							<select id="choicemulitple" multiple class="form-input form-input--select">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="search" class="form-label">Search</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="search" id="search" placeholder="Zander Martineau" class="form-input form-input--search">
					</div>
				</div>

			</fieldset>

			<div class="form-actions text_centre">
				<input type="submit" value="Submit" class="btn btn--primary" />
				<input type="reset" class="btn" value="Cancel" />
			</div>

		</form>
	</div>
	<div class="demo-code">
{% highlight html%}
<form action="#" class="form">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label for="text" class="form-label">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="text" id="text" placeholder="Zander Martineau" class="form-input" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="email" class="form-label">Email</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="password" class="form-label">Password</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="password" id="password" placeholder="Your password" class="form-input" />
			</div>
		</div>

		<div class="form-controlGroup form-controlGroup--success">
			<label for="text" class="form-label">Text (Success)</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="text" id="text" placeholder="Zander Martineau" class="form-input" value="A value" required/>
			</div>
		</div>
		<div class="form-controlGroup form-controlGroup--error">
			<label for="email" class="form-label">Email (Error)</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="email" id="email" placeholder="zander@martineau.tv" class="form-input" value="A value" required/>
			</div>
		</div>
		<div class="form-controlGroup form-controlGroup--warning">
			<label for="password" class="form-label">Password (Warning)</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="password" id="password" placeholder="Your password" class="form-input" value="A value" />
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="comments" class="form-label">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea id="comments" rows="3" cols="50" class="form-input form-input--textarea"></textarea>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="text" class="form-label">Disabled Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="text" id="text" placeholder="Zander Martineau" class="form-input" disabled/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="file" class="form-label">File upload <br>
				<small>Firefox uses the <code>size</code> attribute to determine width.</small>
			</label>

			<div class="form-controlGroup-inputWrapper">
				<label class="form-input form-input--fileWrapper">
					<input type="file" id="file" accept="image/*" size="14" class="form-input-file" />
				</label>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="file" class="form-label">File upload (alt)<br>
				<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
			</label>

			<div class="form-controlGroup-inputWrapper">
				<label class="form-input form-input--fileWrapper--styled">
					<input type="file" id="file" accept="image/*" size="14" class="form-input-file" />
				</label>
			</div>
		</div>
		<div class="g-row">
			<div class="form-controlGroup g-span6 g-col">
				<label for="comments" class="form-label">Checkboxes</label>
				<div class="form-controlGroup-inputWrapper">
					<label class="control">
						<input type="checkbox" value="check1">
						This is a checkbox
					</label>
					<label class="control">
						<input type="checkbox" value="check2">
						This is a checkbox
					</label>
					<label class="control">
						<input type="checkbox" value="check3" disabled>
						This is a checkbox
					</label>
				</div>
			</div>

			<div class="form-controlGroup g-span6 g-col">
				<label for="comments" class="form-label">Radio buttons</label>
				<div class="form-controlGroup-inputWrapper">
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
						This is a radio
					</label>
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
						This is another radio
					</label>
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
						This is another radio
					</label>
				</div>
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="comments" class="form-label">Inline Checkboxes</label>
			<div class="form-controlGroup-inputWrapper">
				<label class="control control--inline">
					<input type="checkbox" value="check1">
					This is a checkbox
				</label>
				<label class="control control--inline">
					<input type="checkbox" value="check2">
					This is a checkbox
				</label>
				<label class="control control--inline">
					<input type="checkbox" value="check3" disabled>
					This is a checkbox
				</label>
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="comments" class="form-label">Inline radio buttons</label>
			<div class="form-controlGroup-inputWrapper">
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
					This is a radio
				</label>
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
					This is another radio
				</label>
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
					This is another radio
				</label>
			</div>
		</div>

		<div class="g-row">
			<div class="form-controlGroup g-col g-span6">
				<label for="choice" class="form-label">Choice</label>
				<div class="form-controlGroup-inputWrapper">
					<select id="choice" class="form-input form-input--select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span6">
				<label for="choice" class="form-label">Choice (mulitple)</label>
				<div class="form-controlGroup-inputWrapper">
					<select id="choicemulitple" multiple class="form-input form-input--select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="search" class="form-label">Search</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="search" id="search" placeholder="Zander Martineau" class="form-input form-input--search">
			</div>
		</div>

	</fieldset>

	<div class="form-actions text_centre">
		<input type="submit" value="Submit" class="btn btn--primary" />
		<input type="reset" class="btn" value="Cancel" />
	</div>

</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->
