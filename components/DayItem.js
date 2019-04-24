import React from 'react';
import {ListItem} from "react-native-elements";
import { withNavigation } from 'react-navigation';

const scheduleItem = (props) => {

    return (
        <ListItem
            topDivider={true}
            onPress={() => {
                props.navigation.navigate('Details', {
                    day: props.dayId,
                });
            }}
            title={props.dayName}
            bottomDivider={true}
        />
    )

}

export default scheduleItem;