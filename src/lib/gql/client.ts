import { GraphQLClient } from 'graphql-request';
import { cgEndpoint } from '@/lib/gql/constants.mjs';

const client = new GraphQLClient(cgEndpoint.href);

export default client;
