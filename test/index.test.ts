import * as fs from 'fs';
import * as path from 'path';

import { createCriticalCssExtractor, CriticalCssExtractor } from '../src/';

function runTest(
  original: string,
  html: string,
  expected: string,
  preservedSelectors?: { classes?: string[]; ids?: string[]; tags?: string[] },
) {
  function fix(s: string) {
    return s.replace(/\s*([{}:,;])\s*/g, '$1');
  }

  const criticalCssExtractor = createCriticalCssExtractor(original);
  const actual = criticalCssExtractor.extractFrom(html, preservedSelectors || {}, 'static.com');

  expect(fix(actual)).toBe(fix(expected));
}


async function loadHtml() {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'critical_bench.html'), 'utf8');
  return html;
}

async function loadCss() {
  const css = fs.readFileSync(path.resolve(__dirname, '..', 'critical_bench.css'), 'utf8');
  return css;
}

function bench(fn: () => void) {
  const start = Date.now();
  fn();
  const end = Date.now();
  return end - start;
}

// These benchmarks require you to have the critical_bench.html and critical_bench.css files in the root of the project
// You can generate them by visiting your project locally and saving the server HTML response
// The CSS can be grabbed from scope's GetAllCss() method response, or by combining all the CSS files in the project into a single file
describe.skip('benchmarks', () => {
  let html: string;
  let css: string;
  let criticalCssExtractor: CriticalCssExtractor;

  beforeAll(async () => {
    html = await loadHtml();
    css = await loadCss();
  });

  describe('benchmarks createCriticalCssExtractor', () => {
    it('single bench', () => {
      const time = bench(() => (criticalCssExtractor = createCriticalCssExtractor(css)))
      console.log(`createCriticalCssExtractor single ran in ${time}ms`);
    });

    it('100 benches', () => {
      const runs: number[] = [];
      for (let i = 0; i < 100; i++) {
        runs.push(
          bench(() => (criticalCssExtractor = createCriticalCssExtractor(css)))
        );
      }
      const fastest = Math.min(...runs);
      const slowest = Math.max(...runs);
      const average = runs.reduce((a, b) => a + b, 0) / runs.length;
      console.log('createCriticalCssExtractor 100', { fastest, slowest, average });
    });
  });

  describe('benchmarks extractFrom', () => {
    it('single bench', () => {
      const time = bench(() => (criticalCssExtractor.extractFrom(html)))
      console.log(`extractFrom single ran in ${time}ms`);
    });

    it('100 benches', () => {
      const runs: number[] = [];
      for (let i = 0; i < 100; i++) {
        runs.push(
          bench(() => criticalCssExtractor.extractFrom(html))
        );
      }
      const fastest = Math.min(...runs);
      const slowest = Math.max(...runs);
      const average = runs.reduce((a, b) => a + b, 0) / runs.length;
      console.log('extractFrom 100', { fastest, slowest, average });
    });
  });
});

describe('criticalcss', () => {
  it('works with class selectors', () => {
    runTest('.a {display: none} .b {display: block}', '<div class="a">hello</div>', '.a {display: none}');
    runTest('.a, .b {display: none} .b {display: block}', '<div class="a">hello</div>', '.a, .b {display: none}');
    runTest('.a .b {display: none} .a .c {display: block}', '<div class="a">hello</div>', '');
    runTest(
      '.a .b {display: none} .a .c {display: block}',
      '<div class="a">hello</div><div class="b">2</div>',
      '.a .b {display: none}',
    );
    runTest(
      '.a.b {display: none} .a .c {display: block}',
      '<div class="a">hello</div><div class="b">2</div>',
      '.a.b {display: none}',
    );
    runTest(
      '.a.c, .a.b {display: none} .a .c {display: block}',
      '<div class="a">hello</div><div class="b">2</div>',
      '.a.c, .a.b {display: none}',
    );
  });

  it('works with id selectors', () => {
    runTest('#a {display: none} #b {display: block}', '<div id="a">hello</div>', '#a {display: none}');
    runTest('#a, #b {display: none} #b {display: block}', '<div id="a">hello</div>', '#a, #b {display: none}');
    runTest('#a #b {display: none} #a #c {display: block}', '<div id="a">hello</div>', '');
    runTest(
      '#a #b {display: none} #a #c {display: block}',
      '<div id="a">hello</div><div id="b">2</div>',
      '#a #b {display: none}',
    );
    runTest(
      '#a #c, #a #b {display: none} #a #c {display: block}',
      '<div id="a">hello</div><div id="b">2</div>',
      '#a #c, #a #b {display: none}',
    );
  });

  it('works with tag selectors', () => {
    runTest('div {display: none} span {display: block}', '<div>hello</div>', 'div {display: none}');
    runTest('div, span {display: none} span {display: block}', '<div>hello</div>', 'div, span {display: none}');
    runTest('div span {display: none} div h1 {display: block}', '<div>hello</div>', '');
    runTest(
      'div span {display: none} div h1 {display: block}',
      '<div>hello</div><span>2</span>',
      'div span {display: none}',
    );
    runTest(
      'div h1, div span {display: none} div h1 {display: block}',
      '<div>hello</div><span>2</span>',
      'div h1, div span {display: none}',
    );
  });

  it('works with star selectors', () => {
    runTest('.a * {display: none} .b * {display: block}', '<div class="a">hello</div>', '.a * {display: none}');
  });

  it('works with a mix of class and id selectors and tag selectors', () => {
    runTest(
      '.a#c, .a#b {display: none} .a #c {display: block}',
      '<div class="a">hello</div><div id="b">2</div>',
      '.a#c, .a#b {display: none}',
    );
    runTest(
      'div#c, div#b {display: none} div #c {display: block}',
      '<div>hello</div><span id="b">2</span>',
      'div#c, div#b {display: none}',
    );
  });

  it('considers the global usage in addition to the html', () => {
    runTest(
      '.a {display: none} .b {display: block} .c {display: inline} #d {display: inline-block} #e {display: flex} div {display: inline-flex} span {display: inline-grid} h1 {display: grid}',
      '<div class="a">hello</div><div id="d">2</div>',
      '.a {display: none} .b {display: block} #d {display: inline-block} #e {display: flex} div {display: inline-flex} span {display: inline-grid}',
      { classes: ['b'], ids: ['e'], tags: ['span'] },
    );
  });

  it('treats tag selectors as case insensitive but id and class selectors are case sensitive', () => {
    runTest('.a {display: none} .b {display: block}', '<div class="A">hello</div>', '', { classes: ['B'] });

    runTest('#a {display: none} #b {display: block}', '<div id="A">hello</div>', '', { ids: ['B'] });

    runTest(
      'DiV {display: none} SpAn {display: block}',
      '<dIv>hello</dIv>',
      'DiV {display: none} SpAn {display: block}',
      { tags: ['sPaN'] },
    );
  });

  it('Ignores :not pseudo-selectors when determining whether to output the element', () => {
    runTest('.a :not(.b) {display: block}', '<div class="a">hello</div>', '.a :not(.b) {display: block}');
  });

  it('Rewrites urls without hosts to use the static host', () => {
    runTest(
      '.a {display: none; background: url("/common.css"); background-image: url(/common2.css) !important;} .b {display: block}',
      '<div class="a">hello</div>',
      '.a {display: none; background: url("//static.com/common.css"); background-image: url(//static.com/common2.css) !important}',
    );
    runTest(
      '.a {display: none; background: url("//test.com/common.css"); background-image: url(//test.com/common2.css) !important;} .b {display: block}',
      '<div class="a">hello</div>',
      '.a {display: none; background: url("//test.com/common.css"); background-image: url(//test.com/common2.css) !important}',
    );
    runTest(
      '.a {display: none; background: url("https://test.com/common.css"); background-image: url(https://test.com/common2.css) !important;} .b {display: block}',
      '<div class="a">hello</div>',
      '.a {display: none; background: url("https://test.com/common.css"); background-image: url(https://test.com/common2.css) !important}',
    );
  });

  it('preserves @charset', () => {
    runTest(
      '@charset "utf-8"; .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@charset "utf-8"; .a {display: none}',
    );
  });

  it('preserves @import', () => {
    runTest(
      '@import url("fineprint.css") print; .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import url("fineprint.css") print; .a {display: none}',
    );
    runTest(
      '@import url("bluish.css") speech; .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import url("bluish.css") speech; .a {display: none}',
    );
    runTest(
      "@import 'custom.css'; .a {display: none} .b {display: block}",
      '<div class="a">hello</div>',
      "@import 'custom.css'; .a {display: none}",
    );
    runTest(
      '@import url("chrome://communicator/skin/"); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import url("chrome://communicator/skin/"); .a {display: none}',
    );
    runTest(
      '@import "common.css" screen; .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import "common.css" screen; .a {display: none}',
    );
    runTest(
      "@import url('landscape.css') screen and (orientation:landscape); .a {display: none} .b {display: block}",
      '<div class="a">hello</div>',
      "@import url('landscape.css') screen and (orientation:landscape); .a {display: none}",
    );
  });

  it('rewrites urls without host in @import', () => {
    runTest(
      '@import "/common.css" screen; @import url("/common2.css"); @import url(/common3.css); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import "//static.com/common.css" screen; @import url("//static.com/common2.css"); @import url(//static.com/common3.css); .a {display: none}',
    );
    runTest(
      '@import "//test.com/common.css" screen; @import url("//test.com/common2.css"); @import url(//test.com/common3.css); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import "//test.com/common.css" screen; @import url("//test.com/common2.css"); @import url(//test.com/common3.css); .a {display: none}',
    );
    runTest(
      '@import "https://test.com/common.css" screen; @import url("https://test.com/common2.css"); @import url(https://test.com/common3.css); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@import "https://test.com/common.css" screen; @import url("https://test.com/common2.css"); @import url(https://test.com/common3.css); .a {display: none}',
    );
  });

  it('preserves @namespace', () => {
    runTest(
      '@namespace url(http://www.w3.org/1999/xhtml); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@namespace url(http://www.w3.org/1999/xhtml); .a {display: none}',
    );
    runTest(
      '@namespace svg url(http://www.w3.org/2000/svg); .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@namespace svg url(http://www.w3.org/2000/svg); .a {display: none}',
    );
  });

  it('works with @page', () => {
    runTest(
      '@page { margin: 1cm } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@page { margin: 1cm } .a {display: none}',
    );
    runTest(
      '@page :first { margin: 1cm } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@page :first { margin: 1cm } .a {display: none}',
    );
  });

  it('works with @font-face', () => {
    runTest(
      '@font-face { font-family: "Open Sans"; src: url("//test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2"); } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@font-face { font-family: "Open Sans"; src: url("//test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2") } .a {display: none}',
    );
  });

  it('rewrites urls without host in @font-face', () => {
    runTest(
      '@font-face { font-family: "Open Sans"; src: url(/fonts/OpenSans-Regular-webfont.woff2), url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"); } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@font-face { font-family: "Open Sans"; src: url(//static.com/fonts/OpenSans-Regular-webfont.woff2), url("//static.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2") } .a {display: none}',
    );
    runTest(
      '@font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2), url("//test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2"); } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2), url("//test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2") } .a {display: none}',
    );
    runTest(
      '@font-face { font-family: "Open Sans"; src: url(https://test.com/fonts/OpenSans-Regular-webfont.woff2), url("https://test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2"); } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@font-face { font-family: "Open Sans"; src: url(https://test.com/fonts/OpenSans-Regular-webfont.woff2), url("https://test.com/fonts/OpenSans-Regular-webfont.woff2") format("woff2") } .a {display: none}',
    );
  });

  it('works with @keyframes', () => {
    runTest(
      '@keyframes test { from { margin-left: 100%; width: 300%; } to { margin-left: 0; width: 100%; } } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@keyframes test { from { margin-left: 100%; width: 300% } to { margin-left: 0; width: 100% } } .a {display: none}',
    );
  });

  it('works with @viewport', () => {
    runTest(
      '@viewport { width: device-width; } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@viewport { width: device-width } .a {display: none}',
    );
  });

  it('works with @counter-style', () => {
    runTest(
      '@counter-style thumbs { system: cyclic; symbols: "\\1F44D"; suffix: " "; } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@counter-style thumbs { system: cyclic; symbols: "\\1F44D"; suffix: " " } .a {display: none}',
    );
  });

  it('works with @font-feature-values', () => {
    runTest(
      '@font-feature-values Font One { @styleset { nice-style: 12; } } .a {display: none} .b {display: block}',
      '<div class="a">hello</div>',
      '@font-feature-values Font One { @styleset { nice-style: 12 } } .a {display: none}',
    );
  });

  it('works with @media', () => {
    runTest(
      '@media screen and (min-width: 900px) { .a {display: block} .b {display: flex} } .a {display: none} .b {display: inline}',
      '<div class="a">hello</div>',
      '@media screen and (min-width: 900px) { .a {display: block} } .a {display: none}',
    );

    runTest(
      '@media screen and (min-width: 900px) { .b {display: flex} } .a {display: none} .b {display: inline}',
      '<div class="a">hello</div>',
      '.a {display: none}',
    );
  });

  it('works with @supports', () => {
    runTest(
      '@supports not (display: grid) { .a {display: block} .b {display: flex} } .a {display: none} .b {display: inline}',
      '<div class="a">hello</div>',
      '@supports not (display: grid) { .a {display: block} } .a {display: none}',
    );

    runTest(
      '@supports not (display: grid) { .b {display: flex} } .a {display: none} .b {display: inline}',
      '<div class="a">hello</div>',
      '.a {display: none}',
    );
  });

  it('works with nested @media and @supports', () => {
    runTest(
      `@supports not (display: grid) {
          @media screen and (min-width: 1000px) {
              @supports not (display: inline-grid) {
                  .a {width: 30px}
                  .b {width: 40px}
              }
          }
      }`,
      '<div class="a">hello</div>',
      `@supports not (display: grid) {
          @media screen and (min-width: 1000px) {
              @supports not (display: inline-grid) {
                  .a {width: 30px}
              }
          }
      }`,
    );

    runTest(
      `@supports not (display: grid) {
          .a {display: block}
          .b {display: flex}
          @media screen and (min-width: 900px) {
              .a {width: 10px}
              .b {width: 20px}
          }
          @media screen and (min-width: 1000px) {
              @supports not (display: inline-grid) {
                  .a {width: 30px}
                  .b {width: 40px}
              }
          }
          @media screen and (min-width: 1500px) {
              @supports not (display: inline-grid) {
                  .a {height: 30px}
                  .b {height: 40px}
              }
              .a {height: 10px}
              .b {height: 20px}
          }
          @media screen and (min-width: 2000px) {
              @supports not (display: inline-grid) {
                  .b {width: 50px}
              }
          }
      }
      .a {display: none}
      .b {display: inline}`,
      '<div class="a">hello</div>',
      `@supports not (display: grid) {
          .a {display: block}
          @media screen and (min-width: 900px) {
              .a {width: 10px}
          }
          @media screen and (min-width: 1000px) {
              @supports not (display: inline-grid) {
                  .a {width: 30px}
              }
          }
          @media screen and (min-width: 1500px) {
              @supports not (display: inline-grid) {
                  .a {height: 30px}
              }
              .a {height: 10px}
          }
      }
      .a {display: none}`,
    );
  });

  it('works with @font-face nested inside @media', () => {
    runTest(
      `@supports not (display: grid) {
          @font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2) format("woff2") }
          .a {display: block}
          .b {display: flex}
      }
      @supports (display: grid) {
          @font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2) format("woff2") }
      }`,
      '<div class="a">hello</div>',
      `@supports not (display: grid) {
          @font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2) format("woff2") }
          .a {display: block}
      }
      @supports (display: grid) {
          @font-face { font-family: "Open Sans"; src: url(//test.com/fonts/OpenSans-Regular-webfont.woff2) format("woff2") }
      }`,
    );
  });

  it('keeps only the last one of duplicated rules', () => {
    runTest(
      '.a {display: none; } .a {display: block} .a {display: none; }',
      '<div class="a">hello</div>',
      '.a {display: block} .a {display: none}',
    );

    runTest(
      '@media screen { .a {display: none; } .a {display: block} .a {display: none; } }',
      '<div class="a">hello</div>',
      '@media screen { .a {display: block} .a {display: none} }',
    );
  });

  it('works with CSS variables', () => {
    runTest(
      ':root { --main: #fff; } .a { color: var(--main); }',
      '<div class="a">hello</div>',
      ':root { --main: #fff } .a { color: var(--main) }',
    );
  });

  it('works with @container queries', () => {
    runTest(
      '.a { container-name: hero; container-type: inline-size; } @container hero (width < 500px) { .b { color: red; } }',
      '<div class="a"><div class="b">hello</div></div>',
      '.a { container-name: hero; container-type: inline-size } @container hero (width < 500px) { .b { color: red } }',
    );
    runTest(
      '.a { container: hero / inline-size; } @container hero (width < 500px) { .b { color: red; } }',
      '<div class="a"><div class="b">hello</div></div>',
      '.a { container: hero / inline-size } @container hero (width < 500px) { .b { color: red } }',
    );
  });

  it('works with @layer', () => {
    runTest(
      '@layer reset, default; .a { color: red; } @layer components { .a { color: blue; } }',
      '<div class="a">hello</div>',
      '@layer reset, default; .a { color: red } @layer components { .a { color: blue } }',
    );
    runTest(
      `@import url('framework.css') layer(components.framework);`,
      '<div class="a">hello</div>',
      `@import url('framework.css') layer(components.framework);`,
    );
  });

  it('works with :where selector', () => {
    runTest(
      ':where(.a) { color: red; }',
      '<div class="a">hello</div>',
      ':where(.a) { color: red }',
    );
  });

  it('works with :is selector', () => {
    runTest(
      ':is(.a) { color: red; }',
      '<div class="a">hello</div>',
      ':is(.a) { color: red }',
    );
    runTest(
      '.a:is(.b) { color: red; }',
      '<div class="a b">hello</div>',
      '.a:is(.b) { color: red }',
    );
  });
});
