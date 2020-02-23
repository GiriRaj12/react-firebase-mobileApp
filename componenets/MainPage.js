import React from 'react'
import { Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, View, Text } from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';
import { database, auth } from '../config/config.js';
import { SearchBar, Icon} from 'react-native-elements';
class MainPage extends React.Component {
    state = {
        data: [],
        tempData:[],
        loading: false,
        searchText: '',
        searchPlaceHolder:"Type to search.."
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
            this.setState({tempData : this.state.data});
            this.setState({ loading: false });
        });
    }

    getAddedData = ()=>{
        console.log("Into get added data");
        database.ref('/translations/'+auth.currentUser.uid).on('child_added', (data)=>{
                data.forEach((element) => {
                    this.setState({data:[...this.state.data, element.val()]});
                });
                this.setState({tempData:this.state.data});
        });

    }
    
    search = (text) => {
        var myPattern = new RegExp('(\\w*'+text+'\\w*)','gi');
        console.log(text);
        this.setState({ searchText: text });
        this.state.data.forEach((e) => {
                if(e.beforeTranslation.toString().match(myPattern)){
                    this.setState({tempData:[e]});
                }
        });
    }


    clearSearch = ()=> {
        this.setState({tempData: this.state.data});
    }

    getShowView(element) {
        return <View key={element.key} style={styles.cardDsiplay}>
            <Text style={styles.sideHeadings}>Before : {" "+"("+element.fromLang+")"}</Text>
            <Text style={styles.showTexts}>{element.beforeTranslation}</Text>
            <Text style={styles.sideHeadings}>Translated :{" "+"("+element.toLang+")"}</Text>
            <Text style={styles.showTexts}>{element.afterTranslation}</Text>
            <View style={styles.emptyspace} />
        </View>
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                    <SearchBar
                        placeholder={this.state.searchPlaceHolder}
                        onChangeText={this.search}
                        value={this.state.searchText}
                        platform="default"
                        lightTheme={true}
                        onClear = {() => this.clearSearch()}
                        cancelIcon = {this.icon}
                        containerStyle={{backgroundColor:'transparent'}}
                    />
                <ScrollView>
                    {this.state.tempData.map((element) => {
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