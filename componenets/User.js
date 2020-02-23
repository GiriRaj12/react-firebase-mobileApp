import React from 'react'
import {View, Text} from 'react-native'
import {Icon, Avatar,Button} from 'react-native-elements' 
import styles from './styles';
import {auth} from '../config/config'

class User extends React.Component{
    state = {
        userName : "User Name"
    }
    
    componentDidMount(){
        this.setState({userName: auth.currentUser.email});
    }

    render(){
        return(
            <View style={styles.appbackground}>
                <View style={styles.avatarStyle}>
                <Avatar
                    size="large"
                    title="U"
                    rounded
                    activeOpacity={0.7}
                ></Avatar>
                <Text style={{marginTop:10}}>{this.state.userName}</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Button
                icon={
                    <Icon
                    name="power_settings_new"
                    type="material"
                    size={15}
                    color="white"
                    />
                    }
                buttonStyle={{width:60,}}
                />
                </View>
            </View>
        );
    }
}

export default User;