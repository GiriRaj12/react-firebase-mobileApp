import React from 'react';
import {f,auth} from '../config/config.js';
import { View } from 'react-native';


class Root extends React.Component {
  state = {
      loggedIn : false,
  }
  
  constructor(props){
    super(props);
      console.log("Into constructor");
      f.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn: true});
          this.props.navigation.navigate('MainPage');
        }
        else{
          this.setState({loggedIn: false});
          console.log("logged out");
          this.props.navigation.navigate('Login');
        }
      });
    }
  
  //Sign Out Action 
  signOut(){
    auth.signOut()
      .then(()=>{
        this.setState({
          loggedIn : false
        })
      }).catch((e) => {
        console.log(e);
      });
  }
  render(){
    return<View>
      
    </View>
  }
}

export default Root;
