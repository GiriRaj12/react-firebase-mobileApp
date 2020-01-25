import React from 'react';
import { View, Picker, Text } from 'react-native';
import styles from './styles';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../cutomComponenets/CustomButton';
import content from '../commonContent/content.js';
import TextApi from '../config/textApi';

export default class AddText extends React.Component {
    state = {
        fromLanguage: "en",
        toLanguage: "en",
        translatedText: content.addTextContent,
        textToTranslate: "",
        textDisplay: <Text></Text>
    }

    translate = () => {
        // const lang = this.state.fromLanguage + "-" + this.state.toLanguage;
        // if (this.state.textToTranslate != undefined) {
        //     console.log("Text to translate " + this.state.textToTranslate)
        //     let url = TextApi.url + "?key=" + TextApi.key + "&lang=" + lang + "&text=" + this.state.textToTranslate;
        //     console.log(url);
        //     fetch(url, {
        //         method: 'GET',
        //     })
        //         .then((res) => res.json())
        //         .then(res => {
        //             console.log(res);
        //             this.setState({ textDisplay: <View>
        //                 <Text>{this.state.translatedText}</Text>
        //                 <CustomButton styles={styles.viewbutton} callback={this.addSuggestedText}/>
        //             </View> })
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        this.setState({textDisplay:<View>
                        <Text style={styles.translatedText}>{this.state.translatedText}</Text>
                        <View style={styles.emptyspace}/>
                        <CustomButton text="Add Suggesion" styles={styles.viewbutton} callback={this.addSuggestedText}/>
         </View>});
    }

    handleFromChange = (from) => {
        this.setState({ fromLanguage: from })
    }

    handleToChange = (to) => {
        this.setState({ toLanguage: to })
    }

    render() {
        return (
            <ScrollView style={styles.appbackground}>
                <View style={{ width: '100%', marginTop: 80 }}>
                    <View style={styles.parralelViewParent}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>From </Text>
                            <Picker
                                selectedValue={this.state.fromLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={this.handleFromChange}>
                                <Picker.Item label="English" value="en" />
                                <Picker.Item label="Tamil" value="ta" />
                                <Picker.Item label="Spanish" value="es" />
                            </Picker>
                        </View>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>To </Text>
                            <Picker
                                selectedValue={this.state.toLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={this.handleToChange}>
                                <Picker.Item label="English" value="en" />
                                <Picker.Item label="Tamil" value="ta" />
                                <Picker.Item label="Spanish" value="es" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.emptyspace} />
                    <TextInput style={styles.inputtext}
                        placeholder="Text Before Translation"
                        onChangeText={(text) => this.setState({ textToTranslate: text })}
                    />
                    <View style={styles.emptyspace} />
                    <TextInput style={styles.inputtext}
                        placeholder="Add Your Own Translation"
                        onChangeText={(text) => this.setState({ translatedText: text })}
                    />
                    <View style={styles.emptyspace} />
                    <View style={{ flexDirection: "row" }}>
                        <CustomButton callback={this.translate} text="Get Translation" styles={styles.viewbutton}></CustomButton>
                        <CustomButton callback={this.addText} text="Add Text" styles={styles.viewbutton}></CustomButton>
                    </View>
                    <View style={styles.emptyspace} />
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20, marginTop: 40 }}>Instructions</Text>
                    <Text style={styles.instructionsText}>
                        {content.addTextContent}
                    </Text>
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20 }}>Example</Text>
                    <Text style={styles.instructionsText}>
                        {content.addTextExample}
                    </Text>
                    <View style={styles.emptyspace} />
                    <Text style={{ color: 'black', marginLeft: 20 }}>
                        {content.getTranslate}
                    </Text>
                    <View style={styles.emptyspace} />
                    <View style={styles.translatedText}>
                        {this.state.textDisplay}
                    </View>
                </View>
            </ScrollView>
        )
    }
}