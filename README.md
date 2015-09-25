# debug-dude
A thin wrapper around visionmedia`s debug

It exposes a factory having same signature as visionmedia`s debug, but returns an object with several logger instances.

# How to use (es6)

```js
// file: example_dude.js
import dude from 'debug-dude';

const { debug, log, info, warn, error } = dude('my:space');

log('hello!');
warn('beware of wolfs');
error('you shall not pass, dude!');
```

##Console output

```zsh
# log all
✗ DEBUG=* babel-node example_dude.js
  my:space:log hello! +0ms
  my:space:warn beware of wolfs +3ms
  my:space:error you shall not pass, dude! +2ms

# log only errors
✗ DEBUG=*error babel-node __test_dude.js
  my:space:error you shall not pass, dude! +0ms
  
# log all but errors  
✗ DEBUG=my:*,-*error babel-node __test_dude.js
  my:space:log hello! +0ms
  my:space:warn beware of wolfs +2ms
```
