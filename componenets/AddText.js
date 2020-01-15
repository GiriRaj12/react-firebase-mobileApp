import React from 'react'
import { View, Picker, Text } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../cutomComponenets/CustomButton'
import content  from '../commonContent/content.js'
export default class AddText extends React.Component {
    state = {
        fromLanguage: "",
        toLanguage: "",
        inputText: ""
    }
    addText() {
        let url = "https://translation.googleapis.com/language/translate/v2";
        console.log(this.state.toLanguage+"");
    }

    render() {
        return (
            <View style={styles.appbackground}>
                <View style={{ width: '100%', marginTop: 80 }}>
                    <View style={styles.parralelViewParent}>
                        <View style={{marginLeft:40}}>
                            <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>From </Text>
                            <Picker
                                selectedValue={this.state.fromLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ fromLanguage : itemValue })}>
                                <Picker.Item label="English" value="english"/>
                                <Picker.Item label="Tamil" value="tamil" />
                                <Picker.Item label="Spanish" value="spanish"/>
                            </Picker>
                        </View>           
                        <View style={{marginLeft:40}}>
                        <Text style={{ color: '#ff8c00', fontSize: 20, fontWeight: "bold" }}>To </Text>
                            <Picker
                                selectedValue={this.state.toLanguage}
                                style={{ height: 50, width: 140 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ toLanguage : itemValue })}>
                                <Picker.Item label="English" value="eng" />
                                <Picker.Item label="Tamil" value="tamil" />
                                <Picker.Item label="Spanish" value="spanish"/>
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.emptyspace}/>
                    <TextInput style={styles.inputtext}
                        placeholder="Add Translated Text"
                        onChangeText={(text) => this.setState({ inputText: text })}
                    />
                    <View style={styles.emptyspace}/>
                    <CustomButton callback={this.addText} text="Add Text" styles={styles.normalbutton}>
                    </CustomButton>
                    <View style={styles.emptyspace}/>
                    <View style={styles.emptyspace}/>
                    <Text style={{color:'black', marginLeft:20,marginTop:40}}>Instructions</Text>
                    <Text style={styles.instructionsText}>
                    {content.addTextContent}
                    </Text>
                    <View style={styles.emptyspace}/>
                    <Text style={{color:'black', marginLeft:20}}>Example</Text>
                    <Text  style={styles.instructionsText}>
                    {content.addTextExample}
                    </Text>
                </View>
            </View>
        )
    }
}