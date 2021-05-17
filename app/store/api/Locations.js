import { gql } from 'apollo-boost';
import client from '@/services/ApolloClient';

export const fetchLocations = async (page = 1, type, dimension) => {
  const query = gql`
    query($page: Int, $type: String, $dimension: String) {
      locations(page: $page, filter: { type: $type, dimension: $dimension }) {
        info {
          pages
          next
          prev
          count
        }
        results {
          id
          name
          type
          dimension
          residents {
            name
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { page, type, dimension },
  });

  return data;
};

export const fetchLocation = async (id) => {
  const query = gql`
    query($id: ID!) {
      location(id: $id) {
        id
        name
        type
        dimension
        residents {
          id
          name
          species
          status
          gender
          image
        }
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { id },
  });

  return data;
};
