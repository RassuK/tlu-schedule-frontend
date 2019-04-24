import React, { Component } from 'react';
import {ScrollView, Button, AsyncStorage, Text} from 'react-native';

import ScheduleItem from '../components/ScheduleItem'

import axios from 'axios';

class ScheduleScreen extends Component {

    state = {
        'url': '',
        schedules:[],
        dayId: null
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        this.state.dayId = navigation.getParam('day', 'not-set');

        AsyncStorage.getItem('url').then((value) => this.setState({ 'url': value }))
        axios.get('http://192.168.1.147:8080/tlu/schedule/if')
            .then(res => {
                const schedules = res.data.classes[this.state.dayId];
                this.setState({ schedules });
                console.log(this.state.schedules);
            })
        }

    //componentDidUpdate= () => AsyncStorage.getItem('url').then((value) => this.setState({ 'url': value }))

    render() {
        return (

            <ScrollView>
                <Text>{this.state.url}</Text>
                {
                    this.state.schedules.map(( schedule => (

                            <ScheduleItem
                                navigation={this.props.navigation}
                                key = {schedule.name}
                                lectureName = {schedule.name}
                                lecturerName = {schedule.lecturer}
                                classRoom = {schedule.room}
                                startTime = {schedule.startTime}
                                endTime = {schedule.endTime}
                            />
                        )
                    ))
                }

            </ScrollView>
        )
    }
}

export default ScheduleScreen;