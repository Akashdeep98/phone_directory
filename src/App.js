import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddContact from './Components/AddContact/AddContact'
import {BrowserRouter,Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/add' component={AddContact}/>
          <Route exact path='/' component={Home}/>
        </div>  
        </BrowserRouter>
    );
  }
}

export default App;
