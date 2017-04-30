grunt-contrib-rename
===============================================
A convenient plugin but not necessary because you can just use 'copy' and 'delete' tasks in Grunt.  Built
this more to fiddle around with Grunt and to gain some knowledge HowTo build a plugin for Grunt.

[![Build Status](https://travis-ci.org/jasonlam604/grunt-contrib-rename.png)](https://travis-ci.org/jasonlam604/grunt-contrib-rename)

## Getting Started
This plugin requires Grunt `1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-rename
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-rename');
```

*This plugin was designed to work with Grunt 0.4.x. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command

Available at [NPM](https://www.npmjs.com/package/grunt-contrib-rename)

## Rename task
_Run this task with the `grunt rename` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

*Due to the destructive nature of this task, always be cautious of the files you rename.*
### Options

No Options available yet as of 0.0.2

### Extra Info
Behind the scenes as of 0.0.2 use fs.renameSync

### Usage Examples

Yes, rename can be used as move as well when the destination path is different from the source path

#### Primary Usage

```js
rename: {
  main: {
    files: [
  		{src: ['path/to/[file or folder]'], dest: 'path/to/[file-renamed or folder-renamed]'},
		]
  }
}
```

## TODO

 * Add in Options (may not be necessary)

## Release History
 * 2017-04-30 v0.2.0   Bumped peer and dev dependencies
 * 2017-04-29 v0.1.0   Merged dependency changes to support Grunt 1.0.0
 * 2013-06-11 v0.0.3   Minor Fixes and added jslint checking
 * 2013-04-03 v0.0.2   Add support for folder renaming
 * 2013-03-19 v0.0.1   First release for grunt-contrib-rename 0.0.1
