/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
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
  var _LocationUtils = require('./LocationUtils');
  var _createTransitionManager = require('./createTransitionManager');
  var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  };
  var createMemoryHistory = function createMemoryHistory() {
    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var getUserConfirmation = props.getUserConfirmation;
    var _props$initialEntries = props.initialEntries;
    var initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries;
    var _props$initialIndex = props.initialIndex;
    var initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex;
    var _props$keyLength = props.keyLength;
    var keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
    var transitionManager = (0, _createTransitionManager2.default)();
    var setState = function setState(nextState) {
      _extends(history, nextState);
      history.length = history.entries.length;
      transitionManager.notifyListeners(history.location, history.action);
    };
    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };
    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function(entry, index) {
      return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, index ? createKey() : undefined) : (0, _LocationUtils.createLocation)(entry, undefined, index ? entry.key || createKey() : undefined);
    });
    var push = function push(path, state) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'PUSH';
      var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
        if (!ok)
          return;
        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;
        var nextEntries = history.entries.slice(0);
        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }
        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    };
    var replace = function replace(path, state) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
      var action = 'REPLACE';
      var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
        if (!ok)
          return;
        history.entries[history.index] = location;
        setState({
          action: action,
          location: location
        });
      });
    };
    var go = function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
      var action = 'POP';
      var location = history.entries[nextIndex];
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          setState();
        }
      });
    };
    var goBack = function goBack() {
      return go(-1);
    };
    var goForward = function goForward() {
      return go(1);
    };
    var canGo = function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    };
    var block = function block() {
      var prompt = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      return transitionManager.setPrompt(prompt);
    };
    var listen = function listen(listener) {
      return transitionManager.appendListener(listener);
    };
    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };
    return history;
  };
  exports.default = createMemoryHistory;
})(require('process'));
