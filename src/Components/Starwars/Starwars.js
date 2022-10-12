import React from "react";
import { useState, useEffect, useContext } from "react";
import { CountContext } from "../../App";

const Starwars = (props) => {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>Starwars Characters</h1>
      <div>
        <h3>name: {countContext.data.name}</h3>
        <h3>height: {countContext.data.height}</h3>
        <h3>mass: {countContext.data.mass}</h3>
      </div>
      <button onClick={() => countContext.countDispatch("prevstarwars")} >Prev</button>
      <button onClick={() => countContext.countDispatch("nextstarwars")} >Next</button>
      <button onClick={() => countContext.countDispatch("reset")} >Reset</button>
    </div>
  );
};

export default Starwars;
