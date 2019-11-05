import React from 'react'
import { View, Button } from 'react-native'
import '../styles/styles.scss'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HomeScreen',
    };

    onButtonPress() {
        const navigation = this.props.navigation;
        navigation.navigate('Test');
    }

    render() {
        return (
            <View styleName="view view-home">
                <Button title="Voir la page test" onPress={this.onButtonPress.bind(this)} />
            </View>
        )
    }
}