/**
 * Represents an instance of parsed CSS
 */
interface ParsedCss {
    /**
     * Generate the critical CSS required to display a chunk of HTML.
     * @param html The HTML you want to inspect.
     * @param parseResult The value returned from a previous call to parse().
     * @param globalUsage Information about elements whose CSS will be returned even though they do not appear in the HTML.
     * @param assetsHost If specified, external resources without a host will be rewritten to use this host (eg. if assetsHost is "somehost.com", then "url(/image.png)" will be rewritten to "url(//somehost.com/image.png)")
     * @returns The critical CSS required for the specified HTML.
     */
    generate(html: string, globalUsage?: GlobalUsageType, assetsHost?: string): string;
}
interface GlobalUsageType {
    /**
     * A list of CSS classes (without leading .) that should be considered used even if they do not appear in the HTML.
     * These classes are case sensitive.
     */
    classes?: string[];
    /**
     * A list of IDs (without leading #) that should be considered used even if they do not appear in the HTML.
     * These IDs are case sensitive.
     */
    ids?: string[];
    /**
     * A list of tag names that should be considered used even if they do not appear in the HTML.
     * These tag names are case insensitive.
     */
    tags?: string[];
}
/**
 * Parse CSS
 * @param css The CSS to parse
 * @returns A result object that can be passed to generate()
 */
declare function parse(css: string): ParsedCss;

export { type GlobalUsageType, type ParsedCss, parse };
