import { GraphQLClient } from 'graphql-request';
import { useMemo } from 'react';

const useGraphqlClient = () => {
  // Create individual graphql request client only for client side rendering which sends request to a proxy to hide client key
  return useMemo(() => new GraphQLClient('/api/graphql-client'), []);
};

export default useGraphqlClient;
