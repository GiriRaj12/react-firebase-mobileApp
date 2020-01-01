import React from 'react';
import {View, TextInput, Text,Button, TouchableHighlight, TouchableHighlightBase} from 'react-native'
import styles from './styles.js';
export default class RegisterForm extends React.Component{
    state = {
        name : '',
        userName : '',
        password : ''
    }
    render(){
        return(
            <View style = {styles.loginForm}>
        <TextInput style = {styles.inputtext}
          placeholderTextColor = 'gray'
          placeholder = "Name"
          onChangeText = {(text) => this.setState({userName : text})}
        ></TextInput>
        <View style = {styles.emptyspace}></View>
        <TextInput style = {styles.inputtext}
          placeholderTextColor = 'gray'
          placeholder = "Email"
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
          <Button style= {styles.normalbutton} onPress={this.props.registerAction(this.state.userName,this.state.password)} title="Submit"></Button>
          <View style={styles.emptyspace}/>
          <Text style={{textAlign : "center"}}>Aldready have an account ?
          </Text>
          <TouchableHighlight onPress={this.props.loginOrRegisterChange(true)}>
            <Text style={{textAlign : 'center', fontWeight:'bold'}}>
                Login
            </Text>
          </TouchableHighlight>
      </View>
        )
    }
}