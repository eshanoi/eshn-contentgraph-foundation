import type { CodegenConfig } from '@graphql-codegen/cli'
import { ok } from 'node:assert'

const comments = ['/* eslint-disable */', '/* GENERATED FILE. DO NOT MODIFY. */']

ok(process.env.GRAPHQL_ENDPOINT)
ok(process.env.GRAPHQL_CLIENT_KEY)

const endpoint = new URL(process.env.GRAPHQL_ENDPOINT)
endpoint.searchParams.set('auth', process.env.GRAPHQL_CLIENT_KEY)

export default {
  /* Options for GraphQL.vscode-graphql and @graphql-codegen */
  schema: endpoint.href,
  documents: 'src/**/*.gql',

  /* Options for @graphql-codegen */
  ignoreNoDocuments: true,
  generates: {
    'src/gql/schema.ts': {
      plugins: [
        'typescript',
        {
          add: { content: comments },
        },
      ],
      config: {
        avoidOptionals: true,
        nonOptionalTypename: true,
      },
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.gql.g.ts',
        baseTypesPath: '~@/gql/schema',
      },
      plugins: [
        'typescript-operations',
        'typed-document-node',
        {
          add: { content: comments },
        },
      ],
      config: {
        avoidOptionals: true,
        inlineFragmentTypes: 'combine',
        useTypeImports: true
      },
    },
  },
} satisfies CodegenConfig
