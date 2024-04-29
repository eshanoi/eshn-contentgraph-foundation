import { ok } from 'node:assert';

ok(process.env.GRAPHQL_ENDPOINT);
ok(process.env.GRAPHQL_CLIENT_KEY);

export const cgEndpoint = new URL(process.env.GRAPHQL_ENDPOINT);
cgEndpoint.searchParams.set('auth', process.env.GRAPHQL_CLIENT_KEY);
