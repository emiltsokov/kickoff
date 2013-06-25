---
layout: docs
navgroup: docs
title: Editing this website
---

### Before you start
* Install Jekyll globally - `sudo gem install jekyll`
* Install Sass globally - `sudo gem install sass -pre`
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

### Step 1

Run `git clone https://github.com/tmwagency/kickoff.git -b gh-pages kickoff-docs`

### Step 2

Run `cd kickoff-docs`

### Step 3

Run `jekyll build --watch` and `grunt watch`

#### Please note

The Kickoff site resides at [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) and Jekyll builds to `/kickoff/` wherever you run it. Make sure your localhost points to `kickoff-docs`
