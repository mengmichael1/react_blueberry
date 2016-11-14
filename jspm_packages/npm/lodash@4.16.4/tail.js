/* */ 
var baseSlice = require('./_baseSlice');
function tail(array) {
  var length = array ? array.length : 0;
  return length ? baseSlice(array, 1, length) : [];
}
module.exports = tail;
