# Maana Web Text Extractor

GraphQL wrapper around the Java-based [boilerplate](https://github.com/kohlschutter/boilerpipe) library using the JavaScript wrapper, [boilerplate-scraper](https://github.com/warlock/boilerpipe-scraper).

## Example Usage

```graphql
# Write your query or mutation here
query extract {
  extract(url: "https://www.sec.gov/litigation/litreleases/lr18582.htm")
}
```

## Development

```bash
npm i
npm run dev
```

## Docker

```bash
npm run docker-build
npm run docker-run
```
