import React, { Component } from 'react';
import {ScrollView, AsyncStorage, StyleSheet, Button} from 'react-native';
import axios from "axios";
import GroupItem from "../components/GroupItem";

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
        'url': '',
        groups: []
    }

    componentDidMount () {
        AsyncStorage.getItem('url').then((value) => this.setState({ 'url': value }))

        axios.get('http://www.banfor.tk/tlu/schedule/groups')
            .then(res => {
                const groups = res.data;
                this.setState({ groups });
                console.log(this.state.groups)
            })
            .catch((error) => console.log(error));
    }

    setUrl = (value) => {
        AsyncStorage.setItem('url', value);
        this.setState({ 'url': value });
    }


    render() {
        return (
            <ScrollView>
                {
                    this.state.groups.map(( group => (

                            <GroupItem
                                navigation={this.props.navigation}
                                key = {group.id}
                                groupName = {group.name}
                                groupId = {group.id}
                            />
                        )
                    ))
                }

            </ScrollView>

            /*<ScrollView>
                <TextInput style = {styles.textInput} autoCapitalize = 'none'
                           onChangeText = {this.setUrl}/>
                <Text>
                    {this.state.url}
                </Text>
            </ScrollView>*/
        )
    }
}

export default SettingsScreen;