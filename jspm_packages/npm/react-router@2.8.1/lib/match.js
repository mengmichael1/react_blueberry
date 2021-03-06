/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _Actions = require('history/lib/Actions');
  var _invariant = require('invariant');
  var _invariant2 = _interopRequireDefault(_invariant);
  var _createMemoryHistory = require('./createMemoryHistory');
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  var _createTransitionManager = require('./createTransitionManager');
  var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
  var _RouteUtils = require('./RouteUtils');
  var _RouterUtils = require('./RouterUtils');
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  function match(_ref, callback) {
    var history = _ref.history;
    var routes = _ref.routes;
    var location = _ref.location;
    var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
    !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
    history = history ? history : (0, _createMemoryHistory2.default)(options);
    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
    var unlisten = void 0;
    if (location) {
      location = history.createLocation(location);
    } else {
      unlisten = history.listen(function(historyLocation) {
        location = historyLocation;
      });
    }
    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
    history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);
    transitionManager.match(location, function(error, redirectLocation, nextState) {
      callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
        history: history,
        router: router,
        matchContext: {
          history: history,
          transitionManager: transitionManager,
          router: router
        }
      }));
      if (unlisten) {
        unlisten();
      }
    });
  }
  exports.default = match;
  module.exports = exports['default'];
})(require('process'));
