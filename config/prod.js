// File: config/prod.js
{
  "id": "id"    // insert your ID here
  , "paths": "../src"   // do not edit this value
  , "inputs": [   // update with one more more input filenames
  	"../src/file.js"
  ]
  , "externs": [  // include any desired externs (e.g., jQuery) here
    // "jquery-1.8.1.min.js"
  ]
  , "mode": "SIMPLE"    // accepted values are "RAW", "WHITESPACE", "SIMPLE", "ADVANCED"
  , "output-file": "../deploy/file.min.js"    // update with desired output filename
}