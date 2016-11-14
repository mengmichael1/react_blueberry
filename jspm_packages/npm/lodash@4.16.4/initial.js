/* */ 
var baseSlice = require('./_baseSlice');
function initial(array) {
  var length = array ? array.length : 0;
  return length ? baseSlice(array, 0, -1) : [];
}
module.exports = initial;
