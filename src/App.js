import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component"; 
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component"; 

// import Firebase auth so the app is aware that the auth is success or fail 
import { auth, createUserProfileDocument } from "./firebase/firebase-utils"; 

// convert to class so that it can hold state in order to authenticate users
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // open subscription
  // user persistense: firebase keeps tracks of the user so the app stays logged in when user leaves without logging out, as long as the mounting is on within App component.
  // because of this, we need to close subscription when it unmounts, to prevent memory leaks
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            // because setState is async function, need to set up the second function after setting state (just need this to console log in this case)
            }, ()=> {
              console.log(this.state); 
            }); 
        }); 
      // userAuth does not come back, it means the user is not signed in. Return null value in currentUser.
      } else {
        this.setState({ currentUser: userAuth }); 
      }
      
    })
  }

  // close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // <Header> component needs to be aware if the user is logged in or not, so passing in currentUser state. It will pass either null, or user info. 
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* render homepage when the path is "/" */}
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
  )
  }

 
}

export default App;
