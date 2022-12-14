import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useSharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return {
    error,
    data,
    loading,
  };
};
