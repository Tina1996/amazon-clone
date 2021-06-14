import { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders';

const promise = loadStripe('pk_test_jnOHzJvpZqTIlyqD5M2LGOsB')


function App() {

  const [state,dispatch] = useStateValue()
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("the user",authUser)

        if(authUser){
            //user logged in
            dispatch({
              type:"SET_USER",
              user:authUser
            })
        }
        else{
            //user is logged out
            dispatch({
              type:"SET_USER",
              user:null
            })
        }
      })
  }, [])

  return (
    <Router>
      <div className="app">
     
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />  
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
