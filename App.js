import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import ScheduleScreen from './screens/ScheduleScreen'
import SettingsScreen from './screens/SettingsScreen'
import DetailsScreen from './screens/DetailsScreen'

const MainNavigator = createStackNavigator({
    Home: {screen: ScheduleScreen},
    Settings: {screen: SettingsScreen},
});

const App = createAppContainer(MainNavigator);

const ScheduleStack = createStackNavigator({
    Home: { screen: ScheduleScreen },
    Details: { screen: DetailsScreen }
});

export default createAppContainer(createBottomTabNavigator(
    {
        Home: { screen: ScheduleStack },
        Settings: { screen: SettingsScreen }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
        }),
    }
));

//export default App;