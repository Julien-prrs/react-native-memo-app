import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import views from '../screens'

const Router = createStackNavigator({
    Home: {
        screen: views.HomeScreen
    },
    Single: {
        screen: views.SingleScreen
    },
    Edit: {
        screen: views.EditScreen
    },
    NewItem: {
        screen: views.NewItemScreen
    }
},
{
    initialRouteName: 'Home',
    navigationOptions: {
        headerLeft: null
    },
});

export default createAppContainer(Router);