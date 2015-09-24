import createLogger from 'debug';

/**
 * Create debug instances and bind log method to specific console method
 */
export default function createLoggers(ns) {
  const debug = createLogger(`${ns}:debug`);
  debug.log = (...args) => console.log(...args);

  const log = createLogger(`${ns}:log`);
  log.log = (...args) => console.log(...args);

  const info = createLogger(`${ns}:info`);
  info.log = (...args) => console.info(...args);

  const warn = createLogger(`${ns}:warn`);
  warn.log = (...args) => console.warn(...args);

  const error = createLogger(`${ns}:error`);
  error.log = (...args) => console.error(...args);

  return {
    debug,
    log,
    info,
    warn,
    error
  };
}