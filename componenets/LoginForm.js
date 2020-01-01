import React from 'react';
import {View, TextInput, Text,Button, TouchableHighlight, TouchableHighlightBase} from 'react-native'
import styles from './styles.js';
export default class LoginForm extends React.Component{
    state = {
        userName : '',
        password : ''
    }
    render(){
        return(
            <View style = {styles.loginForm}>
        <TextInput style = {styles.inputtext}
          placeholderTextColor = 'gray'
          placeholder = "User Name"
          onChangeText = {(text) => this.setState({userName : text})}
        ></TextInput>
        <View style = {styles.emptyspace}>
        </View>
          <TextInput style = {styles.inputtext}
            secureTextEntry = {true}
            placeholder = "Password"
            placeholderTextColor = 'gray'
            onChangeText = {(text) => this.setState({password: text})}
          >
          </TextInput>
          <View style={styles.emptyspace}/>
          <Button style= {styles.normalbutton} onPress={this.props.loginAction(this.state.userName,this.state.password)} title="Submit"></Button>
          <View style={styles.emptyspace}/>
          <Text style={{textAlign : "center"}}>Dont have an account ?
          </Text>
          <TouchableHighlight onPress={this.props.loginOrRegisterChange(false)}>
            <Text style={{textAlign : 'center', fontWeight:'bold'}}>
                Register
            </Text>
          </TouchableHighlight>
      </View>
        )
    }
}