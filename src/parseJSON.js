// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here


// object recursive function
  if (json.charAt(0) === '{') {
    if (json.charAt(1) === '}') {
      return {};
    } else //run function on members

    var instance = json.lastIndexOf('}');

    // 

// members handling
  var nextComma = json.indexOf(',', 1);
  json.slice(1, nextComma);

// string
  if (json.charAt(0) === '"') {
    var instance = json.indexOf('"', 1);
    return (json.slice(1, instance));
  }

// value  
  





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
