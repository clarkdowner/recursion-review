// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var results = [];

  if (typeof obj === "boolean" || typeof obj === "number"){
    return '' + obj;
  }

  if (obj === null) {
    return "null";
  }

  if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
      //if (i !== obj.length - 1) {
      //  results.push(',');
      //}
    }
    return '[' + results.join(',') + ']'
  }
};
