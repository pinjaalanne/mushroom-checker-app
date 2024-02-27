import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./data/data";

const Mushroom = () => {
  const params = useParams();
  const mushroomData = data.find(
    (mushroom) => mushroom.name === params.mushroom
  );
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>
          {mushroomData?.name}{" "}
          <span className="italic">({mushroomData?.scientificName})</span>
        </h1>
        <img src={mushroomData?.image} alt={mushroomData?.name} />
        <p>Description: {mushroomData?.description}</p>
        <p>Occurence: {mushroomData?.occurrence}</p>
        <p>Picking months: {mushroomData?.["picking months"]}</p>
        <p>Primary habitat: {mushroomData?.["primary habitat"]}</p>
        <p>Edible: {mushroomData?.edible}</p>
        <p>Recipes: {mushroomData?.recipes}</p>
        <button onClick={() => navigate(-1)}>Return</button>
      </div>
    </>
  );
};

export default Mushroom;
