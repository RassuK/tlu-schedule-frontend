import React from 'react';
import {ListItem} from "react-native-elements";

const scheduleItem = (props ) => {
    return (
        <ListItem
            key={props.key}
            title={props.lectureName}
            subtitle={props.lecturerName + " / " + props.classRoom}
            rightElement={props.startTime + "-" + props.endTime}
        />
    )
}

export default scheduleItem;