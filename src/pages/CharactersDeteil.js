import React from "react";
import { useParams } from "react-router-dom";
import { useSharacterOne } from "../hooks/useCharacterOne";

export default function CharactersDetail() {
  const { id } = useParams();

  const {data} = useSharacterOne(id);
  return (
    <div style={{textAlign: "center"}}>
        <h1>{data?.character?.name}</h1>
        <h1>{data?.character?.gender}</h1>
        <h1>{data?.character?.status}</h1>
        <img src={data?.character?.image} alt="" style={{width: "50%"}}/>
    </div>
  );
}
