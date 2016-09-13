// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var checker;

  // whitespace checker
  /* if (json.charAt(0) === " ") {
      checker = json.slice(2);
    } else {
      checker = json.slice(1);
    } */

  if (json === "true") {
      return true;
    } else if (json === "false") {
      return false;
    } else if (json === "null") {
      return null;
    } else if (typeof +json === "number") {
      return +json;
    }

// string
  if (json.charAt(0) === '"') {
    var instance = json.indexOf('"', 1);
    return (json.slice(1, instance));
  }


// object recursive function
  if (json.charAt(0) === '{') {
    if (json.charAt(1) === '}') {
      return {};
    } else {
      var instance = json.lastIndexOf('}');
      var parsed = json.slice(1,instance);
      return parseJSON(parsed);
    }
    //run function on members

// array recursive function
  if (json.charAt(0) === '[') {
    if (json.charAt(1) === ']') {
      return [];
    } else {
      var instance = json.lastIndexOf(']');
      var parsed = json.slice(1,instance);
      return parseJSON(parsed);
    }
  }

    

    // 

// members handling
  var nextComma = json.indexOf(',', 1);
  if(nextComma > 0) {
    json.slice(1, nextComma);
  }
  


// value  
  if (json.charAt(0) === ':') {
    
  }


  





/*
  var counter = 0;

// index position function
  var positionFunction = function (index) {

    counter = index+" "
  }

// whitespace chopper

  if (json.charAt(0) === ' ') {
    var chopper = function(json) {
      chopped = json.slice(1);
      parseJSON (chopped);
    }
  }


  console.log("json: " + json);

// string function
  if (json.charAt(0) === '"') {
    var instance = json.indexOf('"', 1);
    return (json.slice(1, instance));
  }

// array recursive function
  if (json.charAt(0) === '[') {
    var returnArray = [];

    var instance = json.lastIndexOf(']');
    
    var insideArray = json.slice(1,instance);
    var splitted = insideArray.split(',');

    for (var i = 0; i < splitted.length; i++) {
      returnArray.push(parseJSON(splitted[i]));
    }
    console.log(returnArray);
    return returnArray;

  }

return returnObj;
  }
*/
  }
};
