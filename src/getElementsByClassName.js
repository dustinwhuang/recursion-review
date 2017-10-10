// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var resultArr = [];
  traverseTree(document.childNodes);

  function traverseTree(nodes) {
    for (var i = 0; i < nodes.length; i++) {

      if (nodes[i].classList && nodes[i].classList.contains(className)) {
        resultArr.push(nodes[i]);
      }

    traverseTree(nodes[i].childNodes); 
    }   
  }
  return resultArr;

};