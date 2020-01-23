import React from 'react'
import { View, Picker, Text } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../cutomComponenets/CustomButton'
import content from '../commonContent/content.js'
import TextApi from '../config/textApi'
export default class AddText extends React.Component {
        state = {
            fromLanguage: "",
            toLanguage: "",
            inputText: "",
            textDisplay:<Text></Text>
        }
    addText() {
        let url = "https://translation.googleapis.com/language/translate/v2";

    }
    handleFromChange(value) {
        console.log(value);
        this.setState({ fromLanguage: value });
    }
    
    handleToChange(value) {
        console.log(value)
        this.setState({ toLanguage: value });
    }

    translate(lang){
        var url = TextApi.url+"?key="+TextApi.key+",lang="+
    }

    render() {
        return (
            <View style={styles.appbackground}>
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
                        placeholder="Add Translated Text"
                        onChangeText={(text) => this.setState({ inputText: text })}
                    />
                    <View style={styles.emptyspace} />
                    <CustomButton callback={this.addText(this.state.fromLanguage, this.state.toLanguage)} text="Add Text" styles={styles.normalbutton}>
                    </CustomButton>
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
                </View>
            </View>
        )
    }
}