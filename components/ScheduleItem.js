import React from 'react';
import {ListItem} from "react-native-elements";
import { withNavigation } from 'react-navigation';

const scheduleItem = (props) => {

    return (
        <ListItem
            topDivider={true}
            title={props.lectureName}
            subtitle={props.lecturerName + " / " + props.classRoom}
            rightSubtitle={props.startTime + "-" + props.endTime}
            bottomDivider={true}
        />
    )

}

export default scheduleItem;