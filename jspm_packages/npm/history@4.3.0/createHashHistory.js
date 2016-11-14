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
  var _warning = require('warning');
  var _warning2 = _interopRequireDefault(_warning);
  var _invariant = require('invariant');
  var _invariant2 = _interopRequireDefault(_invariant);
  var _LocationUtils = require('./LocationUtils');
  var _PathUtils = require('./PathUtils');
  var _createTransitionManager = require('./createTransitionManager');
  var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
  var _ExecutionEnvironment = require('./ExecutionEnvironment');
  var _DOMUtils = require('./DOMUtils');
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var HashChangeEvent = 'hashchange';
  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: _PathUtils.stripLeadingSlash,
      decodePath: _PathUtils.addLeadingSlash
    },
    slash: {
      encodePath: _PathUtils.addLeadingSlash,
      decodePath: _PathUtils.addLeadingSlash
    }
  };
  var getHashPath = function getHashPath() {
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  };
  var pushHashPath = function pushHashPath(path) {
    return window.location.hash = path;
  };
  var replaceHashPath = function replaceHashPath(path) {
    var hashIndex = window.location.href.indexOf('#');
    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
  };
  var createHashHistory = function createHashHistory() {
    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;
    var globalHistory = window.history;
    var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();
    var _props$basename = props.basename;
    var basename = _props$basename === undefined ? '' : _props$basename;
    var _props$getUserConfirm = props.getUserConfirmation;
    var getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm;
    var _props$hashType = props.hashType;
    var hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
    var _HashPathCoders$hashT = HashPathCoders[hashType];
    var encodePath = _HashPathCoders$hashT.encodePath;
    var decodePath = _HashPathCoders$hashT.decodePath;
    var getDOMLocation = function getDOMLocation() {
      var path = decodePath(getHashPath());
      if (basename)
        path = (0, _PathUtils.stripPrefix)(path, basename);
      return (0, _PathUtils.parsePath)(path);
    };
    var transitionManager = (0, _createTransitionManager2.default)();
    var setState = function setState(nextState) {
      _extends(history, nextState);
      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    };
    var forceNextPop = false;
    var ignorePath = null;
    var handleHashChange = function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);
      if (path !== encodedPath) {
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;
        if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location))
          return;
        if (ignorePath === (0, _PathUtils.createPath)(location))
          return;
        ignorePath = null;
        handlePop(location);
      }
    };
    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        (function() {
          var action = 'POP';
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
            if (ok) {
              setState({
                action: action,
                location: location
              });
            } else {
              revertPop(location);
            }
          });
        })();
      }
    };
    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;
      var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));
      if (toIndex === -1)
        toIndex = 0;
      var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));
      if (fromIndex === -1)
        fromIndex = 0;
      var delta = toIndex - fromIndex;
      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };
    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath)
      replaceHashPath(encodedPath);
    var initialLocation = getDOMLocation();
    var allPaths = [(0, _PathUtils.createPath)(initialLocation)];
    var push = function push(path, state) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
      var action = 'PUSH';
      var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
        if (!ok)
          return;
        var path = (0, _PathUtils.createPath)(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;
        if (hashChanged) {
          ignorePath = path;
          pushHashPath(encodedPath);
          var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
          var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({
            action: action,
            location: location
          });
        } else {
          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
          setState();
        }
      });
    };
    var replace = function replace(path, state) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
      var action = 'REPLACE';
      var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
        if (!ok)
          return;
        var path = (0, _PathUtils.createPath)(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;
        if (hashChanged) {
          ignorePath = path;
          replaceHashPath(encodedPath);
        }
        var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));
        if (prevIndex !== -1)
          allPaths[prevIndex] = path;
        setState({
          action: action,
          location: location
        });
      });
    };
    var go = function go(n) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
      globalHistory.go(n);
    };
    var goBack = function goBack() {
      return go(-1);
    };
    var goForward = function goForward() {
      return go(1);
    };
    var listenerCount = 0;
    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;
      if (listenerCount === 1) {
        (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
      }
    };
    var isBlocked = false;
    var block = function block() {
      var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var unblock = transitionManager.setPrompt(prompt);
      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }
      return function() {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }
        return unblock();
      };
    };
    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function() {
        checkDOMListeners(-1);
        return unlisten();
      };
    };
    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  };
  exports.default = createHashHistory;
})(require('process'));
