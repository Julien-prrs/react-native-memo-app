import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import views from '../screens'

const Router = createStackNavigator({
    Home: {
        screen: views.HomeScreen
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