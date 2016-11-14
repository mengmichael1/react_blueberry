/* */ 
var isObjectLike = require('./isObjectLike');
var argsTag = '[object Arguments]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function baseIsArguments(value) {
  return isObjectLike(value) && objectToString.call(value) == argsTag;
}
module.exports = baseIsArguments;
