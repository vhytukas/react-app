import "./App.css";
import { Link } from "react-router-dom";
import { useReducer, useEffect, useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  PrivateRoute,
  Redirect,
} from "react-router-dom";
import Buttons from "./Components/Button/Buttons";
import Counter from "./Components/Counter/Counter";
import Login from "./Components/Login/Login";
import Starwars from "./Components/Starwars/Starwars";

export const CountContext = React.createContext();

const initialState = {
  count: 0,
  starwarsid: 1

};

const reducer = (state, action) => {
  let newState = {...state}
  switch (action) {

    case "decrement":
      newState.count = state.count - 1;
      return newState;

    case "increment":
      newState.count = state.count + 1;
      return newState;

    case "reset":
      return initialState;
    
      case "nextstarwars":
        newState.starwarsid = state.starwarsid + 1;
        return newState;
        case "prevstarwars":
        newState.starwarsid = state.starwarsid - 1;
        return newState;

    default:
      return;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);
  const [Data, setData] = useState({});
  
  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + count.starwarsid)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [count.starwarsid]);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch, data: Data }}
    >
      <Router>
        <Switch>
          <Route
            path="/Login"
            render={() =>
              !localStorage.getItem("isLoggedIn") ? (
                <Login />
              ) : (
                <Redirect to="/starwars" />
              )
            }
          />
          <Route
            path="/Starwars"
            render={() =>
              !localStorage.getItem("isLoggedIn") ? (
                <Redirect to="/login" />
              ) : (
                <Starwars />
              )
            }
          />
          <Route path="/" component={Counter} />
        </Switch>
      </Router>
    </CountContext.Provider>
  );
}

export default App;
