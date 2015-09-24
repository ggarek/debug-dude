import test from 'tape';
import sinon from 'sinon';

import dude from '../';

const { log, info, warn, error } = dude('dude:test');

test('debug-dude', t => {

  t.test('log', assert => {
    sinon.spy(console, 'log');

    log('Hello, dude!');

    assert.ok(console.log.calledOnce, 'should direct log messages to console.log');

    sinon.restore(console.log);

    assert.end();
  });

  t.test('info', assert => {
    sinon.spy(console, 'info');

    info('Hello, dude!');

    assert.ok(console.info.calledOnce, 'should direct log messages to console.info');

    sinon.restore(console.info);

    assert.end();
  });

  t.test('warn', assert => {
    sinon.spy(console, 'warn');

    warn('Hello, dude!');

    assert.ok(console.warn.calledOnce, 'should direct log messages to console.warn');

    sinon.restore(console.warn);

    assert.end();
  });

  t.test('error', assert => {
    sinon.spy(console, 'error');

    error('Hello, dude!');

    assert.ok(console.error.calledOnce, 'should direct log messages to console.error');

    sinon.restore(console.error);

    assert.end();
  });


  t.end();
});