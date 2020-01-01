import React from 'react';
import { StyleSheet,SafeAreaView, TouchableHighlight, Text,Image,View,TextInput, Button } from 'react-native';
import {f,auth,database} from './config/config.js';
import LoginForm from './componenets/LoginForm.js';
import RegisterForm from './componenets/RegisterForm.js'
import styles from './componenets/styles';


export default class App extends React.Component {
  state = {
    loggedIn : false,
    userName : '',
    password : '',
    loginview : false
  }
  constructor(props){
    super(props);
      console.log("Into constructor");
      f.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn: true});
          console.log("Loggen in"+user);
        }
        else{
          this.setState({loggedIn: false});
          console.log("logged out");
        }
      });
    }

  //Login Event
  loginUser(email, password){
    if(email != '' && password != ''){
        //Login
        try{
          let user = auth.signInWithEmailAndPassword(email,password);
          console.log(user);
        }catch(e){
          console.log(e)
          alert("User name or pasword wrong");
        }
    }
  } 
  //Register Event
  registerUser(email, password){
    auth.createUserWithEmailAndPassword(email,password)
      .then((user)=>{
        this.setState({ loggedIn : true});
        console.log(user);
      })
      .catch((e)=>{
        console.log(e);
      });
  };
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


  //View 
  render(){
  return (
    <SafeAreaView style = {styles.appbackground}>
      <Image
       style = {styles.logo}
       source = {{uri : this.logouri}}
      >
      </Image>
    <View style = {styles.container}>
      { this.state.loggedIn == false ? (
        this.state.loginOrRegister == true ?(
        <LoginForm loginAction = {this.loginUser}></LoginForm>
        )
        :(
          <RegisterForm registerAction = {this.registerUser}></RegisterForm>
        )
      ) : (
        <View>
        <Text style = {{textAlign:"center", textAlignVertical:"center"}}>Logged In</Text>
        <Button style={styles.warningbutton} title="Sign out"></Button>
        </View>
      )}
    </View>
    </SafeAreaView>
  );
  }
  logouri = 'https://pngimage.net/wp-content/uploads/2018/06/vine-logo-png-transparent-background-5.png'
}
