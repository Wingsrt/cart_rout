import { useState } from "react";

import Food from "./food";
import {Switch,Route, Link} from 'react-router-dom'
import './App.css'
import Cloaths from "./cloaths";


function App() {

  

  return (
    <>

    <Link to='/' ><button>Food</button></Link>
    <Link to='/cloaths' ><button>cloaths</button></Link>


    <Switch>

      <Route exact path='/'  component={Food} />
      
      <Route  path='/cloaths'  component={Cloaths} />

   
      </Switch>
   
    
    </>
    
  );
}

export default App;
