/**
 * Provides an easier and cleaner way to access DOM elements without jQuery. 
 * @class Qdom
 */
function Qdom() {
  console.log('aaadomq');
}

/**
 * Get elements of class
 * @method class
 * @param {String} className The name of the class
 * @return {Array} Returns an array of matching elements
 */
Qdom.prototype.class = function(className) {
  var matchingElements = document.getElementsByTagName(className);
  return matchingElements;
};

/**
 * Get an element of ID
 * @method id
 * @param {String} idName
 * @return {Object} Returns the matching DOM element
 */
Qdom.prototype.id = function(idName) {
  var matchingElement = document.getElementById(idName);
  return matchingElement;
};

/** Get elements of tag name
 * @method tag
 * @param {String} tagName
 * @return {Array} Returns an array of matching tag elements
 */
Qdom.prototype.tag = function(tagName) {
  var matchingElement = document.getElementsByTagName(tagName);
  return matchingElement;
};
