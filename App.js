import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScheduleScreen from './screens/ScheduleScreen'
import SettingsScreen from './screens/SettingsScreen'

const MainNavigator = createStackNavigator({
    Home: {screen: ScheduleScreen},
    Settings: {screen: SettingsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;