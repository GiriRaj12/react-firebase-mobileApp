import React from 'react'
import { Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, View, Text, ListView } from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';
import { database, auth } from '../config/config.js'
import CustomButton from '../cutomComponenets/CustomButton';

class MainPage extends React.Component {
    state = {
        data: [],
        loading: false,
    }

    getData = () => {
        database.ref('/translations/' + auth.currentUser.uid).once('value').then((datas) => {
            this.setState({ data: datas });
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = ()=>{
        this.setState({ loading: true });
        database.ref('/translations/' + auth.currentUser.uid).once('value',(datas) => {
            datas.forEach((child) => {
                this.setState({data : [...this.state.data,child.val()]});
            });
            this.setState({loading:false});
        });
    }




    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <ScrollView>
                    {this.state.data.map((element) =>
                     <View key={element.key} style={styles.cardDsiplay}>
                    <Text style={styles.sideHeadings}>Before :</Text>
                    <Text style={styles.showTexts}>{element.beforeTranslation}</Text>
                    <Text style={styles.sideHeadings}>Translated :</Text>
                    <Text style={styles.showTexts}>{element.afterTranslation}</Text>
                    <View style={styles.emptyspace}/>
                    </View>
                    )}
                </ScrollView>
                <ActivityIndicator animating={this.state.loading} style={{margin: '25%', position:'absolute' }} size="large" color="#ff8c00" />
                <TouchableOpacity style={styles.floatingButtonTouch}
                    onPress={() => this.props.navigation.navigate('AddText')}>
                    <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
                        style={styles.floatingButton} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default MainPage;