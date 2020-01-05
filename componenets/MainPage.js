import React from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles';

class MainPage extends React.Component{
    render(){
        return(
            <View style={styles.appbackground}>
            <ScrollView style={{width:'100%', height:'100%'}}>
                
            <TouchableOpacity style ={styles.floatingButton}>
                <Icon name="plus"  size={30} color="#01a699" />
            </TouchableOpacity>
            </ScrollView>
            </View>
        );
    }
}

export default MainPage;