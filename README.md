# ts-loader chalk issue

I have found using `ts-loader` with webpack does not produce correct results, however, compiling using `tsc` all is fine.

Please test using following scenarios


### Using ts-node

- npm run ts-node
- chalk output is correct

### Using build:tsc

- npm run build:tsc
- node build/index.js
- chalk output is correct

### Using build:wp

- npm run build:wp
- node build/bundle.js
- chalk output is incorrect (no colors)

### Bonus Material

I have also found, the only way I can get chalk working is to use `require`
If I change to

```
// const chalk = require('chalk')
import * as chalk from 'chalk'
```

it produces a series of errors and warnings

```
WARNING in ./src/index.ts 4:12-19
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted

ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts
./src/index.ts
[tsl] ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts(3,19)
      TS1005: 'from' expected.

ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts
./src/index.ts
[tsl] ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts(3,25)
      TS1005: ';' expected.

ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts
./src/index.ts
[tsl] ERROR in /Users/merickson/Documents/code/litterbox/ts-loader-chalk-issue/src/index.ts(3,19)
      TS1141: String literal expected.
```
