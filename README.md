grunt-contrib-rename - unofficial grunt plugin
===============================================

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-rename --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-rename');
```

*This plugin was designed to work with Grunt 0.4.x. If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command


## Rename task
_Run this task with the `grunt rename` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

*Due to the destructive nature of this task, always be cautious of the files you rename.*
### Options

#### force
Type: `Boolean`  
Default: false

This overrides `grunt.file.delete` and `grunt.file.copy` from blocking of file. Use with caution.

Behind the scenes rename actually uses grunt.file.copy and grunt.file.delete

### Usage Examples

Yes, rename can be used as move as well when the destination path is different from the source path

#### Primary Usage

```js
rename: {
  main: {
    files: [
  		{src: ['path/to/file'], dest: 'path/to/file-renamed'},
		]
  }
}
```




## Release History

 * 2013-03-19   v0.0.1   First release for grunt-contrib-rename 0.0.1
