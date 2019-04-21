import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

import axios from 'axios';

const schedule = [
    {lectureName : "Asjade Internet", startTime : "10:15", endTime : "13:45", lecturerName : "Jaagup Kippar", classRoom : "A-512"},
    {lectureName : "Teoreetiline Suitsiid", startTime : "10:15", endTime : "13:45", lecturerName : "Demon Man", classRoom : "A-512"},
    {lectureName : "Mobiilirakenduste arendamine", startTime : "10:15", endTime : "13:45", lecturerName : "Teacher Boy", classRoom : "A-512"},
]

export default class Home extends Component {
    state={
        persons:[]
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
            <ScrollView>
                {
                    schedule.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.lectureName}
                            subtitle={l.lecturerName + " / " + l.classRoom}
                            rightElement={l.startTime + "-" + l.endTime}
                        />
                    ))
                }
            </ScrollView>
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