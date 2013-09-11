---
layout: docs
navgroup: docs
title: Editing this website
---

### Before you start
Ruby v2 is needed. Update using [rvm](http://rvm.io/) then install the packages below

* Install Jekyll, rdiscount and Sass globally - `sudo gem install jekyll && sudo gem install rdiscount && sudo gem install sass --pre`
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

### Step 1

Run `git clone https://github.com/tmwagency/kickoff.git -b gh-pages kickoff-docs`

### Step 2

Run `cd kickoff-docs`

### Step 3

Run `npm install` to install all Grunt's dependencies

### Step 4

Run `jekyll build --watch` and `grunt watch`

#### Please note

The Kickoff site resides at [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) and Jekyll builds to `/kickoff/` wherever you run it. Make sure your localhost points to `kickoff-docs` then browse to `http://your-localhost.dev/kickoff/`
