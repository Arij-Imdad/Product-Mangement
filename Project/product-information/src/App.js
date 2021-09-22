import './App.css';
// import Input from './modecules/input-field/inputfield'
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/signUp/signup' 
import HomePage from './components/Hompage/homapage' 
import SignIn from './components/signIn' 


function App() {
  console.log("inside");
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route><Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
