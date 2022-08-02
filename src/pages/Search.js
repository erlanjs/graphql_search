import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_NAME = gql`
  query getCharacterName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        image
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getCharacter, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_NAME,
    {
      variables: {
        name,
      },
    }
  );

  const change = (e) => {
    getCharacter(e.target.value);
    setName(e.target.value);
  };

  console.log({ loading, error, data, called });

  return (
    <>
      <div>
        <input type="search" value={name} onChange={change} />
        <button onClick={() => getCharacter(name)}>Search</button>
      </div>
      <div style={{ padding: "0 20px", display: "flex", flexWrap: "wrap" }}>
        {data?.characters?.results.map((el) => (
            <div style={{ margin: "10px" }}>
              <img src={el.image} alt="" />
              <h3>{el.name}</h3>
            </div>
        ))}
      </div>
    </>
  );
}
