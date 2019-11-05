import React from 'react'
import { TouchableOpacity, Text, View, Button } from 'react-native'
import '../styles/styles.scss'

export default class TestScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    onButtonPress() {
        const navigation = this.props.navigation;
        navigation.goBack();
    }

    render() {
        return (
            <View styleName="view view-test">
                <Text>Page de test</Text>
                <TouchableOpacity styleName="btn">
                    <Button onPress={this.onButtonPress.bind(this)} title="Retour"/>
                </TouchableOpacity>
            </View>
        )
    }
}