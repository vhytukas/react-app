import React from "react";
import { Link } from "react-router-dom";
import "./Counter.css";
import { useReducer, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Buttons from "../Button/Buttons";
import  {CountContext}  from '../../App';

const Counter = () => {
  const history = useHistory();
  const countContext = useContext(CountContext);
  const starwarsHandler = () => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      console.log("print wow");
      history.push("/starwars");
    } else {
      history.push("/login");
    }
  }; 
 
  return (
    
    <>
      <div className="App">
        <div className="counter-button"> Count: {countContext.countState.count} </div>
        <Buttons />
      </div>
      <button onClick={starwarsHandler} className="starwars-btn">Starwars</button> 
      
    </>
  );
};

export default Counter;
