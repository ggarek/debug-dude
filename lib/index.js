'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = createLoggers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

/**
 * Create debug instances and bind log method to specific console method
 */

function createLoggers(ns) {
  var debug = (0, _debug2['default'])(ns + ':debug');
  debug.log = function () {
    return console.log.apply(console, arguments);
  };

  var log = (0, _debug2['default'])(ns + ':log');
  log.log = function () {
    return console.log.apply(console, arguments);
  };

  var info = (0, _debug2['default'])(ns + ':info');
  info.log = function () {
    return console.info.apply(console, arguments);
  };

  var warn = (0, _debug2['default'])(ns + ':warn');
  warn.log = function () {
    return console.warn.apply(console, arguments);
  };

  var error = (0, _debug2['default'])(ns + ':error');
  error.log = function () {
    return console.error.apply(console, arguments);
  };

  return {
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
  };
}

module.exports = exports['default'];