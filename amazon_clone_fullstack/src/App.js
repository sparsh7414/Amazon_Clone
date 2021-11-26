import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { auth } from "./firebase";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {

  const [{basket},dispatch]=useStateValue();
  useEffect(()=>{
    // will run only once when the app component loads....
    auth.onAuthStateChanged(authUser => {

      console.log("The user is >>>>>>>>",authUser);
      if(auth)
      {

        //if auth is not empty than it means that the user is just loggedIn / the user was loggedIn
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }
      else
      {
        //if else condition is true than it means the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
        <div className="app">
          {/* <Switch>
              <Route path="/checkout">
                <Header/>
              </Route>
              <Route path="/">
                <Header/>
                <Home/>
              </Route>
          </Switch> */}
          <Routes>
            <Route path="/" element={[<Header/>, <Home/>]}></Route>
            <Route path="/login" element={
              <Login/>
            }>
            </Route>
            <Route path="/checkout" element={[<Header/>,<Checkout/>]}></Route>
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
