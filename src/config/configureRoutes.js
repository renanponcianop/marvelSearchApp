import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../screens/Search';
import HomeScreen from '../screens/Home';

export default createStackNavigator({
    Search: {
        screen : SearchScreen
    },
    Home: {
        screen: HomeScreen
    }

});
