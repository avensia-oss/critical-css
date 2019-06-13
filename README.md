# critical-css

A library that takes a chunk of CSS and extracts only the parts that are required to correctly render a specific chunk of HTML

## Usage

The library only exports two functions: `parse()` and `generate()`. The intended usage is that the output from `parse()` should be passed to `generate()`. Since `generate()` is much cheaper than `parse()`, `parse()` should preferrably only be called once for many calls to `generate()`.

### Example
```
import { parse, generate } from '@avensia-oss/critical-css';

const css = '.main { display: block; } .unused { display: inline }';
const html = '<div class="main"><span>Hello, world</span></div>';

const parsedCss = parse(css);
const criticalCss = generate(html, parsedCss);

expect(criticalCss).toBe('.main { display: block; }');
```

## Developing

To develop in this library, clone the repository and run `npm install`. To build the release version, run `npm build` or run tests by running `npm test`.
