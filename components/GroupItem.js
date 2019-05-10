import React from 'react';
import {ListItem} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import {AsyncStorage} from "react-native";

const groupItem = (props) => {

    return (
        <ListItem
            onPress={() => AsyncStorage.setItem('url', props.groupId)}
            topDivider={true}
            title={props.groupName}
            rightSubtitle={props.groupId}
            bottomDivider={true}
        />
    )

}

export default groupItem;