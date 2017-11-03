# Yogurt

> An Elegant and Beautiful UI Framework

### Story

I always want to have a minimalist CSS framework, less typing possible, best without the JavaScript. So I built one myself. This took months to craft from ground up completely, I glad the project has come to an end finally.

### Features

- written in SASS
- built-in preprocessor
- modular
- less code

#### Upcoming exclusive features

- FX modules
- Widget: Tooltip
- Widget modules
- Typo modules

### Todo

- concatenate
- minify

### Prerequisites

You need **NodeJs**. Press **CTRL+ALT+T** to open a new **Terminal**.

```bash
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt install -y nodejs
```

### Clone Yogurt

**note:** This will download extra 22.9MB of NPM Modules in order for Yogurt to run the preprocessor.

```bash
$ git clone https://github.com/loouislow81/yogurt.ui.framework.git
$ cd yogurt.ui.framework
$ npm i
```

### Compile

```bash
$ cd yogurt.ui.framework
$ npm run build-clean && npm run build-sass && npm run build-autoprefix
```

Or,

```bash
$ cd yogurt.ui.framework
$ bash build.sh
```

Alternatively,

```bash
$ cd yogurt.ui.framework
$ ./build.sh
```

### Build

The build version is located at `/dist/` folder.

### Concept

```html
<link rel="stylesheet" href="yogurt.css">
```

Examples,

```html
<y class="vessel">
	<y class="chain">
		<y class="grid">One</y>
		<y class="grid">Two</y>
		<y class="grid">Three</y>
		<y class="grid">Four</y>
		<y class="grid">Five</y>
	</y>
</y>
```

```html
<vessel>
	<chain>
		<grid>One</grid>
		<grid>Two</grid>
		<grid>Three</grid>
		<grid>Four</grid>
		<grid>Five</grid>
	</chain>
</vessel>
```

```html
<y vessel="auto">
	<y chain="is-centered"><y grid="auto">One</y>
	<y grid="auto">Two</y>
	<y grid="auto">Three</y>
	<y grid="auto">Four</y>
	<y grid="auto">Five</y></y>
</y>
```
