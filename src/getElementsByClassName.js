// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, target) {
  var results = [];

  var thisTarget = target || document.body;

  if (thisTarget.classList.contains(className)) {
    results.push(thisTarget);
  }

  var elements = thisTarget.children;

  for(var i = 0; i < elements.length; i++) {
    results = results.concat(getElementsByClassName(className, elements[i]));
  }

  return results;
};
