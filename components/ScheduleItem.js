import React from 'react';
import {ListItem} from "react-native-elements";

const scheduleItem = (props) => {
    return (
        <ListItem
            title={props.lectureName}
            subtitle={props.lecturerName + " / " + props.classRoom}
            rightSubtitle={props.startTime + "-" + props.endTime}
        />
    )
}

export default scheduleItem;