import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Navlinks from './Navlinks'
import {auth} from './firebase'
import {useStateValue} from './StatePovider'
import {useEffect} from 'react'

function App() {

  const[{loggedinuser}, dispatch] = useStateValue()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userauth) => {
    if(userauth){
      dispatch({
        type: 'SET_LOGIN',
        loggedinuser: userauth
      })
    }else{
      dispatch({
        type: 'SET_LOGIN',
        loggedinuser: null
      })
    }
  })

  return () => {
    unsubscribe();
  }

},[])



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
           <Header></Header>
           <Checkout></Checkout>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/">
            <Header></Header>
            <Navlinks></Navlinks>
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
