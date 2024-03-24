import { GraphQLClient } from 'graphql-request'
import { ok } from 'node:assert'

ok(process.env.GRAPHQL_ENDPOINT)
ok(process.env.GRAPHQL_CLIENT_KEY)

const endpoint = new URL(process.env.GRAPHQL_ENDPOINT)
endpoint.searchParams.set('auth', process.env.GRAPHQL_CLIENT_KEY)

const client = new GraphQLClient(endpoint.href)

export default client
