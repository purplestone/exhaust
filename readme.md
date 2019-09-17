# exhaust #########

Traversing Permutations exhaustive.

穷举遍历所有的排列

## Getting Started #########
Install the module: ``npm i exhaust``

## Examples #########

```javascript

var $$exhaust = require('exhaust');

console.log($$exhaust(may => `${may('a', 'b')} - ${may('x', 'y', 'z')}`));
// [ 'a - x', 'a - y', 'a - z', 'b - x', 'b - y', 'b - z' ]


```




## License #########
Licensed under the MIT license.