import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query  getCharacter($id: ID!){
    character(id: $id) {
        id
    	name
    	gender
    	image
    	status
    	gender
    }
  }
`;

export const useSharacterOne = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
        id: id,
        name: id
    }
  });
  return {
    error,
    data,
    loading,
  };
};
