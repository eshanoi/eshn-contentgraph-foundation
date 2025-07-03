### .env File Setup

1.  Create `.env.local` in the project root.
2.  Copy content from `.env.example` to `.env.local`.
3.  Update `GRAPHQL_CLIENT_KEY` with your actual key.
4.  Add `.env.local` to `.gitignore` to prevent committing sensitive keys.

### Codegen (GraphQL Code Generation)

1.  **Purpose**: Generates TypeScript types and GraphQL operation documents for type safety and auto-completion.
2.  **Run**:
    ```bash
    npm run codegen
    ```
    This command uses `graphql.config.ts` and loads environment variables from `.env.local` to fetch the schema and generate code.
