import React, { Component } from 'react';
import {ScrollView, Button, AsyncStorage, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DayItem from '../components/DayItem'
import {ListItem} from "react-native-elements";

class ScheduleScreen extends Component {

    static navigationOptions = {
        title: 'Vali nädalapäev',
    };

    state = {
        days:[
            {name: "Esmaspäev", id: 0},
            {name: "Teisipäev", id: 1},
            {name: "Kolmapäev", id: 2},
            {name: "Neljapäev", id: 3},
            {name: "Reede", id: 4},
            {name: "Laupäev", id: 5},
            {name: "Pühapäev", id: 6},
        ]
    }

    render() {
        return (
                    <ScrollView>
                        <Text>{this.state.url}</Text>
                        {
                            this.state.days.map( day => (

                                <DayItem
                                    navigation={this.props.navigation}
                                    key = {day.id}
                                    dayName = {day.name}
                                    dayId ={day.id}
                                />
                                )
                            )
                        }

                    </ScrollView>
        )
    }
}

export default ScheduleScreen;