import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/ProductsContext"
import CartContextProvider from "./Global/CartContext"
import Footer from "./components/Footer"
import NotFound from './components/NotFound'
import DetailsProduct from './components/DetailsProduct'
import Services from './components/Services'
import Contact from './components/Contact';
import {auth} from './firebase'
import { useStateValue } from './StateProvider'
import Login from './components/Login'


const SUB_DOMAIN = "/food"

function App() {

  const [{loggedInUser},dispatch] = useStateValue()

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userauth) =>{
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }
      else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })

    return () =>{
      unsubsribe()
    }

  }, [])

  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path={`${SUB_DOMAIN}/`} exact component={Products} />
          <Route path={`${SUB_DOMAIN}/cart`}exact component={Cart} />
          <Route path={`${SUB_DOMAIN}/detailsProduct`} exact component={DetailsProduct} />
          <Route path={`${SUB_DOMAIN}/services`}  exact component={Services} />
          <Route path={`${SUB_DOMAIN}/contact`}exact component={Contact} />
          <Route path={`${SUB_DOMAIN}/login`}exact component={Login} />
          <Route default exact component={NotFound}/>
        </Switch>
      <Footer/>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}
export default App;







