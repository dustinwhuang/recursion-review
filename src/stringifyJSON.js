// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === null)
    return 'null';

  if (typeof(obj) === 'number')
    return "" + obj;

  if (typeof(obj) === 'boolean')
    return obj.toString();

  if (typeof(obj) === 'string')
    return '"' + obj + '"';

  if (obj.constructor === Array) {
    
    return '[' + obj.map(function(e) {return stringifyJSON(e)}) + ']';

  } else {
    
    var filteredObject = Object.entries(obj).filter(function(e) {
      return !(e[1] instanceof Function || e[1] === undefined);
    });
  
    return '{' + filteredObject.map(function(e) {
      return stringifyJSON(e[0]) + ':' + stringifyJSON(e[1]);  
    }) + '}';  

  }

  return 'null'; 

};