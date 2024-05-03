import type { CodegenConfig } from '@graphql-codegen/cli';
import { cgEndpoint } from './src/lib/gql/constants.mjs';

const comments = [
  '/* eslint-disable */',
  '/* GENERATED FILE. DO NOT MODIFY. */',
];

export default {
  /* Options for GraphQL.vscode-graphql and @graphql-codegen */
  schema: cgEndpoint.href,
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
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: true,
        },
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
        useTypeImports: true,
      },
    },
  },
} satisfies CodegenConfig;
