# debug-dude
A thin wrapper around visionmedia`s debug

It exposes a factory having same signature as visionmedia`s debug, but returns an object with several logger instances.

# How to use (es6)
```
import dude from 'debug-dude';

const { debug, log, info, warn, error } = dude('my:space');
```
