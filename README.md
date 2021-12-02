# critical-css

A library that takes a chunk of CSS and extracts only the parts that are required to correctly render a specific chunk of HTML

## Usage

The library only exports one function: `parse()`, which returns an object with a method `generate()`, which returns a string with only the CSS that is required in order to correctly display the passed HTML.

### Example
```
import { parse } from '@avensia-oss/critical-css';

const css = '.main { display: block; } .unused { display: inline }';
const html = '<div class="main"><span>Hello, world</span></div>';

const parsedCss = parse(css);
const criticalCss = parsedCss.generate(html);

expect(criticalCss).toBe('.main { display: block; }');
```

## Developing

To develop in this library, clone the repository and run `npm install`. To build the release version, run `npm build` or run tests by running `npm test`.
