import React from "react";
import { Link } from "react-router-dom"
import { useSharacters } from "../hooks/useCharacters";



export default function CharactersList() {
  const { error, data, loading } = useSharacters();

  if(loading) return <h4>loading ...</h4>
  
  if(error) return <h4>{JSON.stringify(error)}</h4>

  return (
    <>
    <div style={{textAlign: "center"}}>
    <h1>{"Рик и Морти"}</h1>
    <Link to={`/search`}><h1>Search</h1></Link>
    </div>

      <div style={{ padding: "0 20px", display: "flex", flexWrap: "wrap" }}>
        {data?.characters?.results.map((el) => (
          <Link to={`/${el.id}`}>
            <div style={{ margin: "10px" }}>
              <img src={el.image} alt="" />
              <h3>{el.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
