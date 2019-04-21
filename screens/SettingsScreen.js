import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';

import axios from 'axios';

export default class Settings extends Component {
    /*constructor(props) {
      super(props);
      persons: [];
    }*/

    state={
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    { this.state.persons.map(person =>
                        <Text>
                            settings
                        </Text>)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        flex:1,
        backgroundColor: 'white',
        marginTop: 10
    },
});