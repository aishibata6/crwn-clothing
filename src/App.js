import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component"; 
import './App.css';

function App() {
  return (
      <div>
        <Switch>
          {/* render homepage when the path is "/" */}
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
  )
}

export default App;
