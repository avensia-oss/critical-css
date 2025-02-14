# critical-css

A library that takes a chunk of CSS and extracts only the parts that are required to correctly render a specific chunk of HTML

## Usage

The library only exports one function: `createCriticalCssExtractor()`, which returns an object with a method `extractFrom()`, which returns a string with only the CSS that is required in order to correctly display the passed HTML.

### Example
```
import { createCriticalCssExtractor, PreservedSelectors, CriticalCssExtractor } from '@avensia-oss/critical-css';

const css = '.main { display: block; } .unused { display: inline }';
const html = '<div class="main"><span>Hello, world</span></div>';

const preservedSelectors: PreservedSelectors = {
  classes: ['globally-available-classname'],
  ids: ['container'],
  tags: ['html', 'body'],
};

const criticalCssExtractor = createCriticalCssExtractor(css);
const criticalCss = criticalCssExtractor.extractFrom(html, preservedSelectors);

expect(criticalCss).toBe('.main { display: block; }');
```

## Developing

To develop in this library, clone the repository and run `npm install`. To build the release version, run `npm build` or run tests by running `npm test`.
