import React, { Component } from 'react';
import {ScrollView, Text, AsyncStorage, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 5,
        height: 100,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
})

class SettingsScreen extends Component {

    state = {
        'url': ''
    }

    componentDidMount = () => AsyncStorage.getItem('url').then((value) => this.setState({ 'url': value }))

    setUrl = (value) => {
        AsyncStorage.setItem('url', value);
        this.setState({ 'url': value });
    }



    render() {
        return (
            <ScrollView>
                <TextInput style = {styles.textInput} autoCapitalize = 'none'
                           onChangeText = {this.setUrl}/>
                <Text>
                    {this.state.url}
                </Text>
            </ScrollView>
        )
    }
}

export default SettingsScreen;