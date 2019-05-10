import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import ScheduleScreen from './screens/ScheduleScreen'
import SettingsScreen from './screens/SettingsScreen'
import DetailsScreen from './screens/DetailsScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';

const MainNavigator = createStackNavigator({
    Kalender: {screen: ScheduleScreen},
    Seaded: {screen: SettingsScreen},
});

const App = createAppContainer(MainNavigator);

const ScheduleStack = createStackNavigator({
    Kalender: { screen: ScheduleScreen },
    Details: { screen: DetailsScreen },
});

export default createAppContainer(createBottomTabNavigator(
    {
        Kalender: { screen: ScheduleStack },
        Seaded: { screen: SettingsScreen }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Kalender') {
                  iconName = `ios-book`;
                  // Sometimes we want to add badges to some icons. 
                  // You can check the implementation below.
                } else if (routeName === 'Seaded') {
                  iconName = `ios-options`;
                }
        
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
              },
        }),
    }
));

//export default App;