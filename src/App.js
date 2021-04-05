import React from 'react';
import './App.css'
import Nav from './Nav'
import Homepage from './Homepage';
import About from './About';
import Form from './Form';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './footer';
import Api from './Api'

  

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Logo</h1> 


     <Nav/>
     <Footer/>
     
     <Route 
      path = "/" exact
      component={Homepage} />
      <Route path= "/Homepage" component={Homepage} />

      
     <Route path="/About" component={About} />
    

     <Route path = "/Form" component = {Form} />

     <Route path = "/Api" component={Api} />
    </div>
   
    </Router>
  );
}

export default App;
  