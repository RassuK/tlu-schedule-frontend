import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';

import ScheduleItem from '../components/ScheduleItem'

import axios from 'axios';

const schedule = [
    {lectureName : "Asjad Internet", startTime : "10:15", endTime : "13:45", lecturerName : "Jaagup Kippar", classRoom : "A-512"},
    {lectureName : "Teoreetiline Informaatika", startTime : "10:15", endTime : "13:45", lecturerName : "Peeter Normak", classRoom : "A-512"},
    {lectureName : "Mobiilirakenduste arendamine", startTime : "10:15", endTime : "13:45", lecturerName : "Gorislavski Roman", classRoom : "A-512"},
]

export default class Home extends Component {
    /*
    ###API call example

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
    */

    render() {
        return (

                    <ScrollView>
                        {
                            schedule.map((l, i) => (
                                <ScheduleItem
                                    key = {i}
                                    lectureName = {l.lectureName}
                                    lecturerName = {l.lecturerName}
                                    classRoom = {l.classRoom}
                                    startTime = {l.startTime}
                                    endTime = {l.endTime}
                                />
                            ))
                        }
                    </ScrollView>
        )
    }
}