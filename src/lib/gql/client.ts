import { GraphQLClient } from 'graphql-request';

const endpoint = new URL('https://cg.optimizely.com/content/v2');
endpoint.searchParams.set(
  'auth',
  'YOGC3MvqMyZkcJNQZPWlKWveXpjUyJINJ1V1SDqFMEKyq0i0',
);

const client = new GraphQLClient(endpoint.href);

export default client;
