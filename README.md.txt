lapwing
=========

A Plovr (<a href="http://plovr.com/">http://plovr.com/</a>) implementation mated with a node/express-powered web UI for easy one-click JS builds.

Plovr comes bundled with the Google Closure library and will search your files for goog.provide() and goog.require() declarations to calculate dependencies. It works off of a simple JSON config file, with a variety of <a href="http://plovr.com/options.html">options</a> for input and output (note: Plovr uses its own config names and values, similar but not identical to Closure Compiler). Also includes options for externs if you want/need to bundle an external library (e.g., jQuery) with your own JS build. Config files can be updated anytime without restarting app.js.

Notes:

<ul>
	<li>Config files are stored in /config. If you wish to add an output file, copy an existing config file, save to /config, add the file/path to app.js, restart node and go.</li>
	<li>dev.js inherits from prod.js so you do not need to specify an input fileset there (unless you want a different input set for some reason).</li>
	<li>Output will be saved in /deploy.</li>
	<li>Source files go in /src. ;)</li>
	<li>Requires node.js and express (npm install express).</li>
	<li><strong>All source files must be namespaced with goog.provide(); similarly, dependencies must be declared with goog.require().</strong> For more information, refer to <a href="https://developers.google.com/closure/library/docs/closurebuilder" target="_new">https://developers.google.com/closure/library/docs/closurebuilder</a>.</li>