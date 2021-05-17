import ApolloClient, { gql } from 'apollo-boost';

const remoteGraphQL = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: remoteGraphQL,
});

export default client;
