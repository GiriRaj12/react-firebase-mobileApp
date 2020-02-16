import React from 'react'
import { Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, View, Text, Icon } from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';
import { database, auth } from '../config/config.js';
import { SearchBar } from 'react-native-elements';
class MainPage extends React.Component {
    state = {
        data: [],
        loading: false,
        searchText: '',
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.setState({ loading: true });
        database.ref('/translations/' + auth.currentUser.uid).once('value', (datas) => {
            datas.forEach((child) => {
                this.setState({ data: [...this.state.data, child.val()] });
            });
            this.setState({ loading: false });
        });
    }
    
    search = (text) => {
        console.log(text);
        this.setState({ searchText: text });
    }

    getShowView(element) {
        return <View key={element.key} style={styles.cardDsiplay}>
            <Text style={styles.sideHeadings}>Before :</Text>
            <Text style={styles.showTexts}>{element.beforeTranslation}</Text>
            <Text style={styles.sideHeadings}>Translated :</Text>
            <Text style={styles.showTexts}>{element.afterTranslation}</Text>
            <View style={styles.emptyspace} />
        </View>
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={this.search}
                        value={this.state.searchText}
                        platform="default"
                        lightTheme={true}
                        containerStyle={{backgroundColor:'transparent'}}
                    />
                <ScrollView>
                    {this.state.data.map((element) => {
                        return this.getShowView(element);
                    })}
                </ScrollView>
                <ActivityIndicator animating={this.state.loading} style={{ margin: '25%', position: 'absolute' }} size="large" color="#ff8c00" />
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