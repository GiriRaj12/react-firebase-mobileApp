import React from 'react'
import {Image, ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles';

class MainPage extends React.Component{
    render(){
        return(
            <ScrollView style={styles.appbackground}>
            <TouchableOpacity style={styles.floatingButtonTouch}
                    onPress={()=>this.props.navigation.navigate('AddText')}>
                        <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                            style={styles.floatingButton} />
            </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default MainPage;