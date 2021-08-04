import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './firebase';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';

import HomePage from './pages/homepage';
import Front from './pages/front';
import Back from './pages/back';
import Mobile from './pages/mobile';
import Cart from './pages/cart/cart';
import ShowCart from './pages/cart/show-cart';
import Finalizar from './pages/finalizar';
import Agradecimentos from './pages/agradecimentos';
import Privacidade from './pages/privacidade/index';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);

  }
  
  componentDidMount(){
    this.authListener();
  } 

  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({ user });

      }else{
        this.setState({ user: undefined });
      }
    })

  }

  

  render(){
    
    return (
      <div>
      <Router>
          { this.state.user ? (<NavBar />) : (<Login />) }
          <Switch>

            <Route exact path="/homepage">
              <HomePage />
            </Route>

            <Route exact path="/front">
              <Front />
            </Route>

            <Route exact path="/back">
              <Back />
            </Route>

            <Route exact path="/mobile">
              <Mobile />
            </Route>
              
            <Route exact path="/cart/:id" render={({match}) => (
              <Cart id={match.params.id} />
                )} />

            <Route exact path="/show-cart">
              <ShowCart />
            </Route> 

            <Route exact path="/finalizar">
              <Finalizar />
            </Route>

            <Route exact path="/agradecimentos">
              <Agradecimentos />
            </Route>

            <Route exact path="/privacidade">
              <Privacidade />
            </Route>
          </Switch>
        
      </Router>
      </div>
      
    )
  }
}

export default App;
