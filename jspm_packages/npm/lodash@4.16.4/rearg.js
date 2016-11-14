/* */ 
var createWrap = require('./_createWrap'),
    flatRest = require('./_flatRest');
var REARG_FLAG = 256;
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, REARG_FLAG, undefined, undefined, undefined, indexes);
});
module.exports = rearg;
