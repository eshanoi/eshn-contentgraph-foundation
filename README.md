# Development Setup

## Installation
```bash
bun install
```

## Development
```bash
bun dev
```

For development without codegen watching:
```bash
bun dev:no-watch
```

## .env File Setup
1. Create `.env.local` in the project root
2. Copy content from `.env.example` to `.env.local`
3. Update `GRAPHQL_CLIENT_KEY` with your actual key

## GraphQL Code Generation
Automatically runs with `bun dev`. To run manually:
```bash
bun run codegen
```
