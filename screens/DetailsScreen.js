import React, { Component } from 'react';
import {ScrollView, Button, AsyncStorage, Text} from 'react-native';

import ScheduleItem from '../components/ScheduleItem'

import axios from 'axios';

class ScheduleScreen extends Component {

    state = {
        url: 'IFIFB-2',
        schedules:[],
        dayId: null
    }

    componentWillMount() {
        const { navigation } = this.props;
        this.state.dayId = navigation.getParam('day', 'not-set');

        AsyncStorage.getItem('url').then((value) => this.setState({ url: value }))

    }

    componentDidMount = () => {

        axios.post('http://www.banfor.tk/tlu/schedule/', 'groupName=' + this.state.url)
            .then(res => {
                const schedules = res.data.classes[this.state.dayId];
                this.setState({ schedules });
            })
            .catch((error) => console.log(error));
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