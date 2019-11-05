import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import views from '../screens'

const MainNavigator = createStackNavigator({
    Home: {
        screen: views.HomeScreen,
    },
    Test: {
        screen: views.TestScreen
    },
},
{
    navigationOptions: {
        headerLeft: null,
        headerTintColor: 'blue',
    },
});

export default createAppContainer(MainNavigator);