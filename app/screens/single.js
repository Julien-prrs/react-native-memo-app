import React from 'react'
import { View, Text } from 'react-native'

export default class SingleScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View>
                <Text>Page - Single</Text>
            </View>
        )
    }
}